#!/bin/sh
my_path=$(pwd)
my_name=${my_path##*/}

podman build -t ${my_name} .
