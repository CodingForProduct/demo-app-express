# Intro to Frameworks & Database

Demo app done in Express for the "Coding For Product: Intro to Frameworks & Database" lectures.


## Setup

Requirements: Node, Postgres, yarn

1. clone repo

2. install packages

```bash
$ npm install
```

3. create database

```bash
$ createdb <database_name>
```

4.  set up enviroment variables
- copy .env.sample, and rename it .env
- fill in the `DATABASE_URI`

5. run migrations

```bash
$ npm run migration

```

6. run seed data to populate database
```bash
$ npm run seed
```
## Start application

```bash
$ yarn run dev
```
