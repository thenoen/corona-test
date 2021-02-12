#!/bin/bash

pushd client
ng build --prod
popd

cp client/dist/corona-test/* server/src/main/resources/static/ -R

pushd server
mvn clean package -DskipTests
scp  -i ~/.ssh/keys/ec2-first.pem target/corona-test-0.0.1-SNAPSHOT.jar ubuntu@34.250.5.253:/home/ubuntu
popd
