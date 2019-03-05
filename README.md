A simple back-end for the [practice-frontend repo](https://github.com/gSchool/practice-backend) showing basic auth using bcrypt and jwt

*Note* This app is hard-coded to run on localhost:3001

1. Fork & clone https://github.com/gSchool/practice-backend
1. `cd practice-backend`
1. `git checkout simple-auth`
1. `npm install`
1. `createdb practice_backend`
1. `knex migrate:latest`
1. `knex seed:run`