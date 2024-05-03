#!/bin/sh
my_path=$(pwd)
my_name=${my_path##*/}

docker build -t ${my_name} .
