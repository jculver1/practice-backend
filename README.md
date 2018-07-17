A simple back-end for the [practice-frontend repo](https://github.com/gSchool/practice-backend) showing how to join a one-to-many relationship with Knex query builders.

*Note* This app is hard-coded to run on localhost:3001

1. `createdb practice_dev`
2. `psql practice_dev`
3. `knex migrate:latest`
4. `knex seed:run`
5. `npm install`
6. `npm start`

## Why Joins? Let's put it all in one table!
This app has two tables: _users_ and _shares_. Should we put everything in one table?

## The Everything table (users and shares)
| id | email | text |
| -- | ----- | ---- |
| 1  | first1.last1@gmail.com | hey |
| 2  | first2.last2@gmail.com | hi |

## What's that look like when user 1 adds another share?
| id | email | text |
| -- | ----- | ---- |
| 1  | first1.last1@gmail.com | hey |
| 2  | first2.last2@gmail.com | hi |
| 1  | first1.last1@gmail.com | bye |

## Oof! Ok let's talk joins and REST urls
After running steps above, go to http://localhost:3001/shares in the browser to see shares from all users. Now go to http://localhost:3001/users/1/shares to see shares from just user 1. 

How does this work? Take 10 minutes to explore the database tables created by migrations, look at the routes, and play with the app.

## CFU: Why is id repeated in the knex join?
## Your answer here:

## Useful PSQL commands
* `\d` to see tables
* `\d table-name` to see columns in a table
* `select * from table-name;` to see data in table

## The users table
| id | email |
| -- | ----- |
| 1  | first1.last1@gmail.com |
| 2  | first2.last2@gmail.com |

## The shares table
| id | text | user_id |
| -- | ---- | ----- |
| 1  | hey  | 1 |
| 2  | hi   | 2 |
| 3  | bye  | 1 |

## CFU: What happens when user 2 adds a share?
## Your answer here: