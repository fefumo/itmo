#!/bin/bash

git init

git config user.name "red"
git config user.email "red@smth.com"

echo "commits/" >.gitignore
echo "git.sh" >>.gitignore
git add .gitignore

cp ./commits/commit0/* .
git add .
git commit -m "initial main r0"

cp ./commits/commit1/* .
git add .
git commit -m "main r1"

git checkout -b "work"
cp ./commits/commit2/* .
git add .
git commit -m "initial work r2" --author "blue <blue@smth.com>"

git checkout -b "bugFix"
cp ./commits/commit3/* .
git add .
git commit -m "initial bugFix r3"

git checkout work
cp ./commits/commit4/* .
git add .
git commit -m "work r4" --author "blue <blue@smth.com>"

cp ./commits/commit5/* .
git add .
git commit -m "work r5" --author "blue <blue@smth.com>"

git checkout main
cp ./commits/commit6/* .
git add .
git commit -m "main r6"

git checkout work
cp ./commits/commit7/* .
git add .
git commit -m "work r7" --author "blue <blue@smth.com>"

git checkout bugFix
git merge work --no-commit
cp ./commits/commit8/* .
git add .
git commit -m "bugFix r8"

cp ./commits/commit9/* .
git add .
git commit -m "bugFix r9"

cp ./commits/commit10/* .
git add .
git commit -m "bugFix r10"

git checkout main
git merge bugFix --no-commit
# resolve conflict
