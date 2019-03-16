#!/bin/bash
INPUTPATH=sources/
OUTPUTPATH=compiled/

cd ./wasm

FILES=./sources/*.c

for INPUTFILE in $FILES
do
  FILENAME="$(echo "$INPUTFILE" | sed "s/.*\///")"
  BASENAME="$(echo ${FILENAME%.*})"
  echo "$INPUTPATH$BASENAME.c ======> $OUTPUTPATH$BASENAME.js"
  emcc $INPUTPATH$BASENAME.c -s WASM=1 -O3 -o $OUTPUTPATH$BASENAME.js
done