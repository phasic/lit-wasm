#!/bin/bash
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

{ 
  cd ./src

  compile() { 
    FILENAME="$(echo "$1" | sed "s/.*\///")"
    BASENAME="$(echo ${FILENAME%.*})"
    DIR=$(dirname "$1")

    CYAN='\033[0;36m'
    printf "${CYAN}Compiling ${1}${NC}\n"
    
    emcc $1 -s WASM=1 -O3 -o $DIR/$BASENAME.js
  }
  
  export -f compile
  find . -name "*.c" -exec bash -c 'compile "$@"' bash {} +

    printf "${GREEN}Succesfully compiled resources!${NC}\n"


} || {
    printf "${RED}Something went wrong${NC}\n"
}