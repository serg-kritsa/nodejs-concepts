## run services in docker containers
cd cluster-monitoring-app
docker-compose up

## run apps
cd src\cluster
npm i 
npm run start:dev

cd src\clients\cluster-monitor
npm i 
npm run start:dev

cd src\clients\cluster-monitor-ui
npm i 
npm run start



### stop services in docker containers
ctrl+C
docker-compose down 