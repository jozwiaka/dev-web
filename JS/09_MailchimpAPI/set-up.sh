#!/bin/bash
npm init -y
npm install express body-parser request

#install heroku
git init
git add .
git commit -m "Initial commit"
heroku create
https://secret-island-90555.herokuapp.com/ | https://git.heroku.com/secret-island-90555.git
git push heroku master
git commit -m "Change"
git push heroku master
