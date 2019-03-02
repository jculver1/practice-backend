A simple back-end for the [practice-frontend repo](https://github.com/gSchool/practice-backend) showing basic auth using bcrypt and jwt

*Note* This app is hard-coded to run on localhost:3001

1. `createdb practice_dev`
2. `psql practice_dev`
3. `knex migrate:latest`
4. `knex seed:run`
5. `npm install`
6. `npm start`