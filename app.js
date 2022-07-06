var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require('mysql');
const conn = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'qwerasdf12',
    database:'find-mate'
};
let connection = mysql.createConnection(conn);
connection.connect()

app.listen(8080, function() {
  console.log("start, express sever on port 8080");
});

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/save', function(req, res) {

  console.log(req.body.query);

  connection.query(req.body.query, function(err, results, fields){
      if (err) {
          console.log(err);
      }
      console.log(results);
  });
});
