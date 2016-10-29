var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mySQL = require('mySQL');
var connection = mySQL.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Guitar01',
  databse: 'hotrestaurant',
});

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

connection.connect(function(err) {
  if(err) throw err;
  console.log('Connected as ID ' + connection.threadId)
});

var reservation = [{
  customerName: 'ryan',
  phoneNumber: 732,
  email: 'email.yahoo.com',
  uniqueID: 'Ryan',
}];

console.log(reservation);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.post('/api/new', function (req, res) {
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();

  console.log(newReservation);

  reservation.push(newReservation);
  
  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});