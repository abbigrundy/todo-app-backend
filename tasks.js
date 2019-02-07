const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  const arrayoftasks = [
  {
            id: 1,
            description:"Buy a bottle of milk",
            completed: false
        },
        {
          id:2,
          desription: "Take the dog for a walk",
          completed: false
        },
        {
          id:3,
          description: "Take bins out",
          completed: false
  }
];
  response.json(arrayoftasks);
})

module.exports.handler = serverless(app);