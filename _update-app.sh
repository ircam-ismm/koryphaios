#!/bin/bash

git stash

echo "get sources"
git pull origin main
echo "install"
rm -Rf node_modules
npm install
echo "build"
npm run build

git stash pop

