const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {

  const username = request.query.username;

  const someTasks = {
    message: username + "Lets get on with these tasks!",

  taskList: [
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
        }]
  };
  response.json(taskList);
});

app.delete('/tasks/:taskId', function (request, response) {

  const taskIdToBeDeleted =  request.params.taskId;

  let someResponse = {
    message: "You issued a delete request for ID:" + taskIdToBeDeleted
  };

  if(taskIdToBeDeleted > 3 ) {
    response.status(404);
    someResponse = {
      message: "Task:" + taskIdToBeDeleted + "does not exist"
    };
  }

    response.json(someResponse);
 
  });

  app.post('/tasks/:newTask', function (request, response) {
    const taskAdded = [ {
      id : Number,
      description: " ",
      completed: false,
  }]
  let someResponse = {
    message: "You issued a new task" + taskAdded
  };
  response.json(someResponse); 

  });
module.exports.handler = serverless(app);