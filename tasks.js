const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {
  const someTasks = [
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
  
  response.json(someTasks);
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

  app.post('/tasks', function (request, response) {
    const taskAdded = request.body.taskAdded;
    
  const someJson = {
    message: " Task has been added to the list" 
  };
    response.json(someJson);
  });
    
  app.put('/tasks', function (request, response) {
    const UpdateTask = request.body.UpdateTask

    const someJson = {
      message : "Well done. Task Completed"
    };
  response.json(someJson);
});

module.exports.handler = serverless(app);