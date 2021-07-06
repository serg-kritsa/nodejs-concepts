
## docker compose
* docker compose up -d
* docker compose exec redis-client bash  
press `ctrl+c` to exit OR type `exit`
* docker compose down


## docker
* docker run --name my-redis -d redis
* docker run --name my-redis -d redis redis-server --appendonly yes
If persistence is enabled, data is stored in the `VOLUME /data`, which can be used with `--volumes-from some-volume-container` or `-v /docker/host/dir:/data`
* docker run -it --network my-network --rm redis redis-cli -h my-redis