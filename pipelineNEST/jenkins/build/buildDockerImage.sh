#!/bin/bash


echo "***************************************"
echo "****** building the docker image ******"
echo "***************************************"

docker image build -t nest-project:1 --no-cache -f $(pwd)/jenkins/build/Dockerfile ./nest-app

echo "********** image build finish **********"
