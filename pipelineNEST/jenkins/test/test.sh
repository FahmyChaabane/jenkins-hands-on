#!/bin/bash


echo "*************************"
echo "****** testing app ******"
echo "*************************"

docker container run --rm -v $(pwd)/nest-app:/usr/app -w /usr/app node:17-alpine npm test

echo "****** finish testing app ******"
