#!/bin/bash


echo "**************************************"
echo "****** install npm dependencies ******"
echo "**************************************"

docker container run --rm -v $(pwd)/nest-app:/usr/app -w /usr/app node:17-alpine npm install --prefer-online

echo "****** finish install npm dependencies ******"
