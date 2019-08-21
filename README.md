# Lorenzos Personal Site

Big issues I went through on my deploy... this article was what helped me fix the issue:

ended up deleting package-lock a bunch of times.  After a few attempts of that and still getting the same error I decided to look towards a new deploy.  I was able to change something out but here is what I had to do if I run into two errors:

if the error states permission denied:

remove package lock json

and rerun install

then run this 

https://npm.community/t/cannot-read-property-match-of-undefined/203

rm -rf package-lock.json node_modules

then npm install

this second fix also works if deploying error is popping as (cannot read property 'match' of undefined)