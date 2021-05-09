#!/bin/sh
printf "\tInstalling 'somhunter-data-server'...\n"

ABSOLUTE_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/"
cd $ABSOLUTE_PATH # CD to script dir

python -m pip install -r requirements.txt

printf "\tDone installing 'somhunter-data-server'.\n"