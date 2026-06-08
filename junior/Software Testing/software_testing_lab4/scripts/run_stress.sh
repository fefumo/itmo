#!/usr/bin/env bash
set -euo pipefail

JMETER="${JMETER:-jmeter}"

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <config>"
  echo "Example: $0 3"
  exit 1
fi

CONFIG="$1"

DURATION="${DURATION:-120}"
RAMP="${RAMP:-30}"

# Каждый виртуальный пользователь по заданию соответствует 20 запросам/мин.
USERS_LIST="${USERS_LIST:-1 3 6 9 12 15 18 21 24 27 30 33 36}"

mkdir -p results generated-plans

echo "Stress test settings:"
echo "  config:       $CONFIG"
echo "  users list:   $USERS_LIST"
echo "  duration:     $DURATION sec"
echo "  ramp-up:      $RAMP sec"
echo

for USERS in $USERS_LIST; do
  THROUGHPUT=$((USERS * 20))
  OUT="results/stress_config_${CONFIG}_users_${USERS}"
  PLAN="generated-plans/stress_config_${CONFIG}_users_${USERS}.jmx"

  echo "=============================================="
  echo "Running stress test: config=$CONFIG users=$USERS"
  echo "Target throughput: $THROUGHPUT requests/min"
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
    -Jthreads="$USERS" \
    -Jduration="$DURATION" \
    -Jramp="$RAMP" \
    -Jjmeter.save.saveservice.output_format=csv \
    -Jjmeter.save.saveservice.print_field_names=true

  echo
done

echo "Stress tests finished."
