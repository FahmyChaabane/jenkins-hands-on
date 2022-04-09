#!/bin/bash


echo "****************************"
echo "****** build the dist ******"
echo "****************************"

docker container run --rm -v $(pwd)/nest-app:/usr/app -w /usr/app node:17-alpine npm run build

echo "****** finish build the dist ******"

