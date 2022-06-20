sudo docker run -d -p 80:80 -p443:443 myapp:13


docker image prune --filter label=build-stage
