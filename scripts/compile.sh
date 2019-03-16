#!/bin/bash
cd ./src

compile() { 
  FILENAME="$(echo "$1" | sed "s/.*\///")"
  echo $FILENAME
  BASENAME="$(echo ${FILENAME%.*})"
  echo $BASENAME
  DIR=$(dirname "$1")
  echo $DIR

  emcc $1 -s WASM=1 -O3 -o $DIR/$BASENAME.js
 }
export -f compile
find . -name "*.c" -exec bash -c 'compile "$@"' bash {} +