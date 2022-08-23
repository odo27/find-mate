// import express
var express = require('express');
// make express instance
var app = express();
// import bodyParser
var bodyParser = require('body-parser');
// import mysql
const mysql = require('mysql');
// database informations
const conn = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'qwerasdf12',
    database:'find-mate'
};

// make port with 8080
app.listen(8080, function() {
  // starting message
  console.log("start, express sever on port 8080");
});

// add public folder static
app.use(express.static('public'));
// use bodyParser's json formatting
app.use(bodyParser.json());

// open index.html when a user comes to ip:8080
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// save to db with a query
app.post('/save', function(req, res) {
  // connect to database
  var connection = mysql.createConnection(conn);
  connection.connect();
  console.log(req.body.query);
  connection.query(req.body.query, function(err, results, fields){
  });
  connection.end();
});

// select user counts from db
app.post('/count', function(req, res) {
  // connect to database
  var connection = mysql.createConnection(conn);
  connection.connect();
  var query = "SELECT COUNT(*) as CNT FROM " + req.body.table;
  connection.query(query, function(err, results, fields){
    res.send(String(results[0].CNT));
  });
  connection.end();
});

// select result counts from db
app.post('/resultCount', function(req, res) {
  // connect to database
  var connection = mysql.createConnection(conn);
  connection.connect();
  var query = "SELECT COUNT(CASE WHEN result=0 then 1 end) as CNT0, COUNT(CASE WHEN result=1 then 1 end) as CNT1, COUNT(CASE WHEN result=2 then 1 end) as CNT2, COUNT(CASE WHEN result=3 then 1 end) as CNT3 FROM " + req.body.table;
  connection.query(query, function(err, results, fields){
    resultCount = {0: results[0].CNT0, 1: results[0].CNT1, 2: results[0].CNT2, 3: results[0].CNT3}
    res.send(resultCount);
  });
  connection.end();
});
