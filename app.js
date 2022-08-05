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
    host:'34.64.245.91',
    port:'3306',
    user:'odo27',
    password:'qwerasdf12',
    database:'find-mate'
};
// connect to database
let connection = mysql.createConnection(conn);
connection.connect()

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
  connection.query(req.body.query, function(err, results, fields){
  });
});

// select user counts from db
app.post('/count', function(req, res) {
  var query = "SELECT COUNT(*) as CNT FROM " + req.body.table;
  connection.query(query, function(err, results, fields){
    res.send(String(results[0].CNT));
  });
});
