// // https://devcenter.heroku.com/articles/heroku-cli
//     heroku -v
//     heroku login // will be opened page in browser 

// // https://git-scm.com/downloads
//     git --version
//     git init // Initialized empty Git repository in ...
//     git status
//     echo 'node_modules/' > .gitignore
//     git add .
//     git commit -m "init"
// git remote add origin git@github.com:gituser/repositoryname.git
// // changes && commit
//     git status
//     git add .
//     git commit -m "changes"
// // add ssh key on PC
//     ls -al ~/.ssh
//     ssh-keygen -t rsa -b 4096 -C "user@email.com" // -C for label // 3 times enter for default values
//     ls -al ~/.ssh // id_rsa - keep in secure way // id_rsa.pub - to all
// // add key to active ssh agent 
//     eval "$(ssh-agent -s)" // pid
//     ssh-add ~/.ssh/id_rsa
// // add ssh key on github
//     github.com/settings/keys | +"New SSH key"
//     _"Title" | _"Key"                   | "Add SSH key"
//                 cat ~/.ssh/id_rsa.pub
//     ssh -T git@github.com | yes // should print  ...You're successfully authenticated...
// // push changes to github
//     git push -u origin master
// // configure heroku
//     heroku keys:add | y
//     heroku create deployment-tag-app // used in url deployment-tag-app.heroku.com // sub-domain OR own dns-name
// // commit 3 changes for heroku hosting && push
//     package.json | scripts.start
//     fix port
//     fix localhost:3000
// git remote // heroku             origin // check that heroku exists
//     git push heroku master
//     open deployment-tag-app.heroku.com in browser