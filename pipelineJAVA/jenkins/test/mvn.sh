#!/bin/bash


echo "****************************"
echo "****** start the test ******"
echo "****************************"

docker container run --rm -v $(pwd)/java-app:/usr/app -v mvnDEP:/root/.m2/ -w /usr/app maven:alpine mvn test
