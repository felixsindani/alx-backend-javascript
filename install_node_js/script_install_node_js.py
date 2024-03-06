#!/usr/bin/env bash

#Script Install NodeJS 12.11.x
#(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

## You may also need development tools to build native addons:
#sudo apt-get install gcc g++ make

nodejs -v
npm -v

#install Jest, Babel and ESList by using the supplied conf files and run npm install
vi package.json
vi babel.config.js
vi vi .eslintrc.js

npm install

#Install Jest using: 
#npm install --save-dev jest
#Install Babel using:
#npm install --save-dev babel-jest @babel/core @babel/preset-env

#Install ESLint using: 
#npm install --save-dev eslint

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y