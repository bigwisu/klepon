#!/bin/sh

docker build . -t klepon
OUTPUT=$(docker run -d -v $(pwd):/app -p 8080:8080 klepon)

#container.sh script will make it easy to enter container
tee container.sh << EOF
#!/bin/sh
docker exec -it ${OUTPUT} bash
EOF

chmod 775 container.sh

docker attach ${OUTPUT}