#!/bin/sh

docker run -v $(pwd):/app -p 8080:80 webdevops/php-nginx:7.4