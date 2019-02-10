const mysql = require ("mysql");

function getDatabaseConnection(){
    // setting up the properties of the connection. 
    return mysql.createConnection ({
        host: process.env.RDS_HOST, // Environment variables for added security and allows code to flex for the envioronment. 
        user: process.env.RDS_USER, 
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE
    });
}


function getTasks() {
    const connection = getDatabaseConnection(); // establishes the database connection
    return new Promise(function(resolve, reject) {   // wraps the next code as a promise
        connection.query("SELECT * FROM TASKS", function(error, results, fields) { // issue a query that selects Tasks(gets)
            if (error) { // call back function. Once that query is done.
                connection.destroy(); // make sure connection is terminated
                return reject(error); // reject the promise
            } 
            else { 
                connection.end(); // still end the connection and return the result.
                return resolve(results);
            }
        });
    });
}



function saveTask(taskDescription){
    const connection = getDatabaseConnection();

    return new Promise (function(resolve,reject){

        const postData  = {
            Description: taskDescription,
            Completed: false,
            UserID: 1
            };
        connection.query('INSERT INTO TASKS SET ?', postData, function (error, results, fields) {
            if (error) {
                connection.destroy();
                return reject(error);
                
            }
            else {
                connection.end();
                return resolve(results);
            }
          
        });

    });
}

function updateTask(Completed){
    const connection = getDatabaseConnection();

    return new Promise (function(resolve,reject){
        const putData = {
            Description: taskDescription,
            Completed: 1,
            UserID: 1
        };
    
    connection.query(' UPDATE TASKS SET Completed 1  ', putData, function (error,results,fields){
            if (error) {
                connection.destroy();
                return reject(error);
                
            }
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}
module.exports = {
    getTasks,
    saveTask,
    updateTask
}