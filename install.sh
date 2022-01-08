#!/bin/sh

ABSOLUTE_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $ABSOLUTE_PATH # CD to script dir

printf "Installing 'somhunter-data-server'...\n"
npm install  > /dev/null
printf "Done installing 'somhunter-data-server'.\n"
