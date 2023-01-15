// Requiring modules
import express = require('express');
import app = express();
import mssql = require("mysql");

// Get request
app.get('/', function (req, res) {
 
    // Config your database credential
    const config = {
        user: 'postgres',
        password: 'postgre',
        server: 'localhost',
        database: 'petfriends'
    };
 
    // Connect to your database
    mssql.connect(config, function (err) {
 
        // Create Request object to perform
        // query operation
        var request = new mssql.Request();
 
        // Query to the database and get the records
        request.query('select * from adoptables',
            function (err, records) {
 
                if (err) console.log(err)
 
                // Send records as a response
                // to browser
                res.send(records);
 
            });
    });
});
 
var server = app.listen(5000, function () {
    console.log('Server is listening at port 5000...');
});

tx.executeSql('SELECT * FROM adoptables ORDER BY RANDOM() LIMIT 1', [], function (tx, result) { 
    var len = result.rows.length; 

    //generate random number
    var i = Math.floor(Math.random() * len);
    //get row
    var row = result.rows.item(i); 
});