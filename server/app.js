var express = require('express');
var db = require('./db.js');
var bodyParser = require('body-parser');

var app = express();

db.connect();

app.use(express.static(__dirname + '/../client/app'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/jordan', function(req, res) {
  var query = 'select username, comment from comments where gallery=\'jordan\'';
  db.query(query, function(err, results, fields) {
    var data = JSON.stringify(results);
    res.send(data);
  });
});

app.get('/kobe', function(req, res) {
  console.log(req, '============================== from server app.js');
  var query = 'select username, comment from comments where gallery=\'kobe\'';
  db.query(query, function(err, results, fields) {
    var data = results;
    res.send(data);
  });
});

app.get('/lebron', function(req, res) {
  //console.log(req);
  var query = 'select username, comment from comments where gallery=\'lebron\'';
  db.query(query, function(err, results, fields) {
    
    if (err) { throw err; }
    
    var data = JSON.stringify(results);
    res.send(data);

  });
});

app.post('/jordan', function(req, res) {
  /*var username = req.body.username;
  var comment = req.body.comment;*/
  var params = [req.body.username, 'jordan', req.body.comment];
  var query = 'insert into comments(username, gallery, comment) value(?,?,?)';
  
  db.query(query, params, function(err, results, fields) {
    if (err) { throw err; }   
    res.send(results);
  });
});

app.post('/kobe', function(req, res) {
  /*var username = req.body.username;
  var comment = req.body.comment;*/
  var params = [req.body.username, 'kobe', req.body.comment];
  var query = 'insert into comments(username, gallery, comment) value(?,?,?)';
  
  db.query(query, params, function(err, results, fields) {
    if (err) { throw err; }   
    res.send(results);
  });
});

app.post('/lebron', function(req, res) {
  /*var username = req.body.username;
  var comment = req.body.comment;*/
  var params = [req.body.username, 'lebron', req.body.comment];
  var query = 'insert into comments(username, gallery, comment) value(?,?,?)';
  
  db.query(query, params, function(err, results, fields) {
    if (err) { throw err; }   
    res.send(results);
  });
});
/*app.get('/lebron', function(req, res) {
  res.send('Comming soon....');
});
*/




app.listen(7000, function() {
  console.log('Listening Port:', 7000);
});        