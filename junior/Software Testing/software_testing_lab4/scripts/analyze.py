#!/usr/bin/env python3

import csv
import re
import sys
from pathlib import Path
from collections import defaultdict

import matplotlib.pyplot as plt


ROOT = Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results"
REPORT = ROOT / "report"
IMG = REPORT / "img"

MAX_MS = 860


def percentile(values, p):
    if not values:
        return 0.0

    values = sorted(values)
    k = (len(values) - 1) * (p / 100)
    f = int(k)
    c = min(f + 1, len(values) - 1)

    if f == c:
        return float(values[f])

    return values[f] + (values[c] - values[f]) * (k - f)


def read_jtl(path):
    rows = []

    with path.open(newline="") as f:
        reader = csv.DictReader(f)

        for row in reader:
            try:
                timestamp = int(row["timeStamp"])
                elapsed = float(row["elapsed"])
                code = str(row.get("responseCode", ""))
                success_raw = str(row.get("success", "")).lower()
                success = success_raw == "true"

                rows.append({
                    "timestamp": timestamp,
                    "elapsed": elapsed,
                    "code": code,
                    "success": success,
                })
            except Exception:
                continue

    return rows


def summarize(rows):
    if not rows:
        return {
            "requests": 0,
            "errors": 0,
            "error_pct": 0.0,
            "avg_ms": 0.0,
            "p90_ms": 0.0,
            "p95_ms": 0.0,
            "max_ms": 0.0,
            "throughput_rps": 0.0,
            "duration_sec": 0.0,
        }

    elapsed_values = [r["elapsed"] for r in rows]

    errors = 0
    for r in rows:
        if not r["success"] or r["code"] != "200":
            errors += 1

    timestamps = [r["timestamp"] for r in rows]
    duration_sec = max((max(timestamps) - min(timestamps)) / 1000.0, 1.0)

    return {
        "requests": len(rows),
        "errors": errors,
        "error_pct": errors * 100.0 / len(rows),
        "avg_ms": sum(elapsed_values) / len(elapsed_values),
        "p90_ms": percentile(elapsed_values, 90),
        "p95_ms": percentile(elapsed_values, 95),
        "max_ms": max(elapsed_values),
        "throughput_rps": len(rows) / duration_sec,
        "duration_sec": duration_sec,
    }


def write_csv(path, rows, header):
    with path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=header)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)


def mark_first_error(rows):
    first_error = next((r for r in rows if r["errors"] > 0), None)
    if not first_error:
        return

    plt.axvline(
        first_error["load_rpm"],
        color="red",
        linestyle=":",
        label=f"First HTTP 500: {first_error['users']} users",
    )


def plot_load():
    REPORT.mkdir(exist_ok=True)
    IMG.mkdir(parents=True, exist_ok=True)

    summary_rows = []

    plt.figure(figsize=(11, 6))

    for config in [1, 2, 3]:
        jtl = RESULTS / f"load_config_{config}" / "results.jtl"

        if not jtl.exists():
            print(f"Missing file: {jtl}")
            continue

        rows = read_jtl(jtl)
        summary = summarize(rows)

        summary_rows.append({
            "config": config,
            "requests": summary["requests"],
            "errors": summary["errors"],
            "error_pct": round(summary["error_pct"], 2),
            "avg_ms": round(summary["avg_ms"], 2),
            "p90_ms": round(summary["p90_ms"], 2),
            "p95_ms": round(summary["p95_ms"], 2),
            "max_ms": round(summary["max_ms"], 2),
            "throughput_rps": round(summary["throughput_rps"], 3),
            "duration_sec": round(summary["duration_sec"], 1),
            "satisfies_avg_860ms": summary["avg_ms"] <= MAX_MS and summary["errors"] == 0,
            "satisfies_p95_860ms": summary["p95_ms"] <= MAX_MS and summary["errors"] == 0,
        })

        if not rows:
            continue

        min_ts = min(r["timestamp"] for r in rows)
        bucket_size = 10
        buckets = defaultdict(int)

        for r in rows:
            sec = int((r["timestamp"] - min_ts) / 1000)
            bucket = sec // bucket_size
            buckets[bucket] += 1

        xs = sorted(buckets.keys())
        ys = [buckets[x] / bucket_size for x in xs]

        xs_sec = [x * bucket_size for x in xs]

        plt.plot(xs_sec, ys, marker="o", label=f"config={config}")

    plt.title("Load test: throughput over time")
    plt.xlabel("Time from test start, sec")
    plt.ylabel("Throughput, requests/sec")
    plt.grid(True)
    plt.legend()
    plt.tight_layout()

    out = IMG / "load_throughput_all_configs.png"
    plt.savefig(out, dpi=150)
    print(f"Saved graph: {out}")

    summary_path = REPORT / "load_summary.csv"
    write_csv(
        summary_path,
        summary_rows,
        [
            "config",
            "requests",
            "errors",
            "error_pct",
            "avg_ms",
            "p90_ms",
            "p95_ms",
            "max_ms",
            "throughput_rps",
            "duration_sec",
            "satisfies_avg_860ms",
            "satisfies_p95_860ms",
        ],
    )
    print(f"Saved summary: {summary_path}")

    print()
    print("Load summary:")
    for row in summary_rows:
        print(row)


def plot_stress():
    REPORT.mkdir(exist_ok=True)
    IMG.mkdir(parents=True, exist_ok=True)

    pattern = re.compile(r"stress_config_(\d+)_users_(\d+)")
    summary_rows = []

    for directory in sorted(RESULTS.iterdir()):
        if not directory.is_dir():
            continue

        match = pattern.fullmatch(directory.name)
        if not match:
            continue

        config = int(match.group(1))
        users = int(match.group(2))

        jtl = directory / "results.jtl"

        if not jtl.exists():
            continue

        rows = read_jtl(jtl)
        summary = summarize(rows)

        load_rpm = users * 20
        load_rps = load_rpm / 60.0

        summary_rows.append({
            "config": config,
            "users": users,
            "load_rpm": load_rpm,
            "load_rps": round(load_rps, 3),
            "requests": summary["requests"],
            "errors": summary["errors"],
            "error_pct": round(summary["error_pct"], 2),
            "avg_ms": round(summary["avg_ms"], 2),
            "p90_ms": round(summary["p90_ms"], 2),
            "p95_ms": round(summary["p95_ms"], 2),
            "max_ms": round(summary["max_ms"], 2),
            "throughput_rps": round(summary["throughput_rps"], 3),
            "satisfies_avg_860ms": summary["avg_ms"] <= MAX_MS and summary["errors"] == 0,
            "satisfies_p95_860ms": summary["p95_ms"] <= MAX_MS and summary["errors"] == 0,
        })

    summary_rows.sort(key=lambda r: (r["config"], r["users"]))

    if not summary_rows:
        print("No stress results found.")
        return

    summary_path = REPORT / "stress_summary.csv"
    write_csv(
        summary_path,
        summary_rows,
        [
            "config",
            "users",
            "load_rpm",
            "load_rps",
            "requests",
            "errors",
            "error_pct",
            "avg_ms",
            "p90_ms",
            "p95_ms",
            "max_ms",
            "throughput_rps",
            "satisfies_avg_860ms",
            "satisfies_p95_860ms",
        ],
    )
    print(f"Saved summary: {summary_path}")

    configs = sorted(set(row["config"] for row in summary_rows))

    for config in configs:
        rows = [r for r in summary_rows if r["config"] == config]

        xs = [r["load_rpm"] for r in rows]
        avg = [r["avg_ms"] for r in rows]
        p90 = [r["p90_ms"] for r in rows]
        p95 = [r["p95_ms"] for r in rows]
        max_values = [r["max_ms"] for r in rows]
        error_pct = [r["error_pct"] for r in rows]
        throughput = [r["throughput_rps"] for r in rows]

        plt.figure(figsize=(11, 6))
        plt.plot(xs, avg, marker="o", label="Average response time")
        plt.plot(xs, p95, marker="o", label="P95 response time")
        plt.axhline(MAX_MS, linestyle="--", label=f"Limit {MAX_MS} ms")
        mark_first_error(rows)

        plt.title(f"Stress test: response time vs load, config={config}")
        plt.xlabel("Load, requests/min")
        plt.ylabel("Response time, ms")
        plt.grid(True)
        plt.legend()
        plt.tight_layout()

        out = IMG / f"stress_response_vs_load_config_{config}.png"
        plt.savefig(out, dpi=150)
        print(f"Saved graph: {out}")

        plt.figure(figsize=(11, 6))
        plt.plot(xs, avg, marker="o", label="Average")
        plt.plot(xs, p90, marker="o", label="P90")
        plt.plot(xs, p95, marker="o", label="P95")
        plt.plot(xs, max_values, marker="o", label="Max")
        plt.axhline(MAX_MS, linestyle="--", label=f"Limit {MAX_MS} ms")
        mark_first_error(rows)

        plt.title(f"Stress test: response time metrics vs load, config={config}")
        plt.xlabel("Load, requests/min")
        plt.ylabel("Response time, ms")
        plt.grid(True)
        plt.legend()
        plt.tight_layout()

        out = IMG / f"stress_response_metrics_vs_load_config_{config}.png"
        plt.savefig(out, dpi=150)
        print(f"Saved graph: {out}")

        plt.figure(figsize=(11, 6))
        plt.plot(xs, error_pct, marker="o", label="Error rate")
        mark_first_error(rows)

        plt.title(f"Stress test: error rate vs load, config={config}")
        plt.xlabel("Load, requests/min")
        plt.ylabel("Errors, %")
        plt.grid(True)
        plt.legend()
        plt.tight_layout()

        out = IMG / f"stress_error_rate_vs_load_config_{config}.png"
        plt.savefig(out, dpi=150)
        print(f"Saved graph: {out}")

        plt.figure(figsize=(11, 6))
        scatter = plt.scatter(throughput, avg, c=xs, cmap="viridis", s=55)
        plt.plot(throughput, avg, alpha=0.45, label="Average response time")
        first_error = next((r for r in rows if r["errors"] > 0), None)
        if first_error:
            plt.scatter(
                [first_error["throughput_rps"]],
                [first_error["avg_ms"]],
                color="red",
                s=90,
                label=f"First HTTP 500: {first_error['users']} users",
            )
        plt.axhline(MAX_MS, linestyle="--", label=f"Limit {MAX_MS} ms")
        plt.colorbar(scatter, label="Target load, requests/min")

        plt.title(f"Stress test: throughput vs response time, config={config}")
        plt.xlabel("Actual throughput, requests/sec")
        plt.ylabel("Average response time, ms")
        plt.grid(True)
        plt.legend()
        plt.tight_layout()

        out = IMG / f"stress_throughput_vs_response_config_{config}.png"
        plt.savefig(out, dpi=150)
        print(f"Saved graph: {out}")

    print()
    print("Stress summary:")
    for row in summary_rows:
        print(row)


def main():
    if len(sys.argv) != 2 or sys.argv[1] not in {"load", "stress"}:
        print("Usage:")
        print("  python3 scripts/analyze.py load")
        print("  python3 scripts/analyze.py stress")
        sys.exit(1)

    if sys.argv[1] == "load":
        plot_load()
    else:
        plot_stress()


if __name__ == "__main__":
    main()
