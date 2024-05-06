#!/bin/sh
my_path=$(pwd)
my_name=${my_path##*/}

docker rm frontend
exec docker run --name ${my_name} -it -p 3000:3000\
  -v ${my_path}/repo/src:/usr/local/src/node/src/ frontend\
  pnpm dev
