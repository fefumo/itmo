#!/usr/bin/env bash
set -euo pipefail

BASE_URL="http://localhost:18080/"
TOKEN="519243633"
USER_ID="-1333024912"

echo "Smoke test: checking configs 1, 2, 3"
echo

for c in 1 2 3; do
  echo "===== config=$c ====="

  http_code=$(curl -s -o "/tmp/stload_config_${c}.txt" \
    -w "%{http_code}" \
    "${BASE_URL}?token=${TOKEN}&user=${USER_ID}&config=${c}")

  echo "HTTP=$http_code"
  cat "/tmp/stload_config_${c}.txt"
  echo
done
