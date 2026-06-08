#!/usr/bin/env bash
set -euo pipefail

ssh -N -L 18080:stload.se.ifmo.ru:8080 -p 2222 s413015@helios.cs.ifmo.ru
# ssh -L 18080:stload.se.ifmo.ru:8080 -p 2222 s413015@helios.cs.ifmo.ru 
