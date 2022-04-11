'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;


const app = express();

app.get('/', (request, response, next) => {
  response.status(200).send('HELLO WORLD!')
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT :: ${PORT}`)
})