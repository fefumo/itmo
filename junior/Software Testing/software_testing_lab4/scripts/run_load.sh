#!/usr/bin/env bash
set -euo pipefail

JMETER="${JMETER:-jmeter}"

DURATION="${DURATION:-180}"
RAMP="${RAMP:-60}"
THREADS="${THREADS:-12}"

# 12 пользователей * 20 запросов/мин = 240 запросов/мин
THROUGHPUT="${THROUGHPUT:-240}"

mkdir -p results generated-plans

echo "Load test settings:"
echo "  users:        $THREADS"
echo "  throughput:   $THROUGHPUT requests/min"
echo "  duration:     $DURATION sec"
echo "  ramp-up:      $RAMP sec"
echo

for CONFIG in 1 2 3; do
  OUT="results/load_config_${CONFIG}"
  PLAN="generated-plans/load_config_${CONFIG}.jmx"

  echo "=============================================="
  echo "Running load test for config=$CONFIG"
  echo "Output: $OUT"
  echo "Plan: $PLAN"
  echo "=============================================="

  rm -rf "$OUT"
  mkdir -p "$OUT/html"

  sed "s|__THROUGHPUT__|${THROUGHPUT}|g" \
    plans/stload_test.template.jmx > "$PLAN"

  "$JMETER" \
    -n \
    -t "$PLAN" \
    -l "$OUT/results.jtl" \
    -e \
    -o "$OUT/html" \
    -Jhost=localhost \
    -Jport=18080 \
    -Jconfig="$CONFIG" \
    -Jthreads="$THREADS" \
    -Jduration="$DURATION" \
    -Jramp="$RAMP" \
    -Jjmeter.save.saveservice.output_format=csv \
    -Jjmeter.save.saveservice.print_field_names=true

  echo
done

echo "Load tests finished."
