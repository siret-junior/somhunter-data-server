#!/bin/bash

ABSOLUTE_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $ABSOLUTE_PATH # CD to script dir

echo "Running 'somhunter-data-server'..."
python server.py somhunter-core/data/ITEC_w2vv/