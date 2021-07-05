curl -fsSL get.docker.com -o get-docker.sh

curl -L https://github.com/docker/compose/releases/download/1.15.0/docker-compose- `uname -s `- `uname -m` >/usr/local/bin/docker-compose
docker-compose version