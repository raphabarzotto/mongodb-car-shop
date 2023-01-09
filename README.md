# Mongoose - Car Shop API
A simple Mongoose API built using express and sequelize in Typescript.
Project was made in September 2022 as a part of [Trybe's Back-end Course](https://www.betrybe.com/)

# How to Install
You can use any of the methods to install.

To test it, you can use any API client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).
<details>
  <summary><strong>Locally</strong></summary>

  1. Run a local instance of mongodb
  2. `npm install`
  3. `npm run dev`
</details>
<details>
  <summary><strong>Docker</strong></summary>

  1. `docker-compose up -d` &rarr; to install API and database containers
  2. `docker exec -it car_shop bash` &rarr; to enter container
  3. `npm install`
  4. `npm run dev`
</details>

# API's routes
1. `POST /cars`
  - body should be like this
```json
{
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "seatsQty": 2,
  "doorsQty": 2
}
```

2. `GET /cars`
  - should return an array with all cars

3. `GET /cars/:id`
  - use same 24-hex id given when register a car using route `POST /cars`
  - should return a car with id given

4. `PUT /cars/:id`
  - use same 24-hex id given when register a car using route `POST /cars`
  - should update a car with info given
  - body should be like this:
```json
{
  "model": "Ferrari 550 Maranello",
  "year": 1964,
  "color": "yellow",
  "buyValue": 3500000,
  "seatsQty": 2,
  "doorsQty": 2
}
```

5. `DELETE /cars/:id`
  - use same 24-hex id given when register a car using route `POST /cars`
  - should delete a car with id given

6. `POST /motorcycles`
  - body should be like this
```json
{
  "model": "Honda CG Titan 125",
  "year": 1963,
  "color": "red",
  "buyValue": 3500,
  "category": "Street",
  "engineCapacity": 125
}
```

2. `GET /motorcycles`
  - should return an array with all motorcycles

3. `GET /motorcycles/:id`
  - use same 24-hex id given when register a motorcycle using route `POST /motorcycles`
  - should return a motorcycle with id given

4. `PUT /motorcycles/:id`
  - use same 24-hex id given when register a motorcycle using route `POST /motorcycles`
  - should update a motorcycle with info given
  - body should be like this:
```json
{
  "model": "Honda CG Titan 125",
  "year": 2014,
  "color": "black",
  "buyValue": 3500,
  "category": "Street",
  "engineCapacity": 125
}
```

5. `DELETE /motorcycles/:id`
  - use same 24-hex id given when register a motorcycle using route `POST /motorcycles`
  - should delete a motorcycle with id given