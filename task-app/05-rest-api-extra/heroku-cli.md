// // https://devcenter.heroku.com/articles/heroku-cli
//     heroku -v
//     heroku login // will be opened page in browser 

// // https://git-scm.com/downloads
//     git --version
//     git init // Initialized empty Git repository in ...
//     git status
//     echo 'node_modules' > .gitignore
//     echo 'config' > .gitignore
//     git add .
//     git commit -m "init"
// create private git repository
//     git remote add origin git@github.com:gituser/repositoryname.git
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

// // heroku hosting
// // configure heroku
//     heroku keys:add | y
//     heroku create deployment-tag-app // used in url deployment-tag-app.heroku.com so should not exist before // buy sub-domain OR own dns-name
//         heroku config:set key=value // set env variable
//         heroku config // get env variables
//         heroku config:unset key // remove env variable
//     heroku config:set JWT_SECRET=jwt-secret-used-in-app SENDGRID_API_KEY=SENDGRID_API_KEY
//     heroku config:set MONGODB_URL=cloud-ui:+'connect':+'Connect Your Application':'2 Add your connection string into your application code':copy-paste // if contains special chars, should be wrapped with '' on Linux / "" on Windows // mongodb+srv://q:<password>@cluster0.basxu.mongodb.net/<dbname>?retryWrites=true&w=majority
//     no need to add PORT !!!
//     heroku config // checking env variables

// // commit 3 changes for heroku hosting && push
//     package.json | scripts.start
//     fix port
//     fix localhost:3000
// git remote // heroku             origin // check that heroku exists
//     git push heroku master
//     open deployment-tag-app.heroku.com in browser