## run tests in travis env
script:
    <!-- if the shell is closed, dont kill anything this command creates -->
          <!-- run server command   -->
                        <!-- run this command in the background (subshell) -->
  - nohup npm run start &
    <!-- add waiting time in sec. -->
  - sleep 3
  - npm run test

## add services in travis env
services:
  - mongodb
  - redis-server
[travis ci docs on mongo](https://docs.travis-ci.com/user/database-setup/#mongodb)  
[travis ci docs on redis](https://docs.travis-ci.com/user/database-setup/#redis)

## mongo url  in travis env
mongodb://127.0.0.1:27017/blog_ci

## add env variables in travis env
env:
    <!-- to be available in one build together  -->
    <!-- many variables should be combined in ONE line -->
               <!-- (separated by space)  -->
  - NODE_ENV=ci PORT=3000

## config for puppeteer in travis env
await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox']
});

## config for static UI for node_js app in travis env
if (['production', 'ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

## fix link w/ protocol in travis env
from localhost to http://localhost

## connect github repo w/ travis server
- sign in w/ github account
- select github repo
- push changes to triger build process
  git add . && git commit -m 'travis' && git push origin master


