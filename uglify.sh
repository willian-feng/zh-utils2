#!/bin/bash

declare -a LIST
i=0
DIR='dist'

if [ -d $DIR ]
then
  rm -rf $DIR
fi

read_dir() {
  for file in `ls -a $1`
  do
    if [ -d $1$file ]
    then
      if [[ $file != './' && $file != '../' ]]
      then
        read_dir $1$file
      fi
    else
      LIST[i]=$1$file
      ((i++))
    fi
  done
}
read_dir './lib/'

mkdir $DIR

uglifyjs ${LIST[*]} -m -o $DIR/zh-utils2.min.js
#uglifyjs ${LIST[*]} -o $DIR/zh-utils2.js