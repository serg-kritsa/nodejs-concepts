[https://github.com/Unitech/pm2]

# PM2 User Guide
## install 
`npm install -g pm2`

# cluster operation
## start cluster with all available logical cpu cores
`pm2 start index.js -i 0` 

## stop cluster
`pm2 delete index`

# get info about cluster
## cluster status (short info in table)
`pm2 list`

## show details
`pm2 show index`

## dashboard with logs
`pm2 monit`
Ctrl-C
