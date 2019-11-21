var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(cors())
app.get('/student1', function (req, res) {

    var sql = require("mssql");
    // Configuration object for your database
    var config = {
        user: 'Balaji',
    password: 'Balre@ct135',
    server: '10.10.13.212\\sql2014', 
    database: 'Training1' 
    };
    // connect to the database
    sql.connect(config, function (err) {
        let id=10;console.log(id)
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // console.log(req.body);
           
        // query to the database and get the records
        request.query("select * from Employee_Tables where Employee_Id between '" +1+ "'and '" +100000+ "' ", function (err, result) {
            
            if (err) console.log(err)
            // send records as a response
            console.log(result.recordset)
            res.send(result);
            sql.close()
        
            
        });
        
    });
   
});

var server = app.listen(5002, function () {
    console.log(`5002 is running.`);
});