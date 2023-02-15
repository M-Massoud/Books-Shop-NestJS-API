## Books shop - NestJS API

this is a simple CRUD operations API built with NestJS and connected to mongo db

## EndPoints

- books
- get all books
  `GET`
  `/books`

- get specific book
  `Get`
  `/books/:id`

- add a new book
  `Post`
  `/books`

```
{
    "title": "book title",
    "description": "an amazing book from the writer",
    "price": 9.99
}
```

- edit book
  `Patch`
  `/books/:id`

```
{
    "title": "book title v2",
    "description": "an amazing book from the writer",
    "price": 12.99
}
```

- delete book
  `Delete`
  `/books/:id`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
