#!/bin/sh
printf "\tInstalling 'somhunter-data-server'...\n"

ABSOLUTE_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $ABSOLUTE_PATH # CD to script dir

npm install

printf "\tDone installing 'somhunter-data-server'.\n"