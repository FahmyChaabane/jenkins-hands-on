#!/bin/bash


echo "******************************"
echo "****** building the jar ******"
echo "******************************"

docker container run --rm -v $(pwd)/java-app:/usr/app -v mvnDEP:/root/.m2/ -w /usr/app maven:alpine mvn -B -DskipTests clean package

echo "****** jar build finish ******"

echo "******************************"
echo "***** building the image *****"
echo "******************************"

docker image build -t $IMAGE_NAME:1 --no-cache -f $(pwd)/jenkins/build/Dockerfile ./java-app/target

echo "***** image build finish *****"


