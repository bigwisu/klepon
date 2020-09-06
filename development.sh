#!/bin/sh

docker build . -t klepon
docker run -v $(pwd):/app -p 8080:80 klepon