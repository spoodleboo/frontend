#!/bin/sh
my_path=$(pwd)
my_name=${my_path##*/}

exec docker run -p 3000:3000 ${my_name} 
