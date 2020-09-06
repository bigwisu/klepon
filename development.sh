#!/bin/sh

docker rm -f klepon
docker build . -t klepon
docker run -v $(pwd):/app --name klepon -p 8080:8080 klepon 