const express = require("express");
const itemRoutes = require('./routes/item.routes')
var Amadeus = require('amadeus');
var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/user", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

var amadeus = new Amadeus({
  clientId: 'w9Eo5Qk5OOVFg2UeKrWZpfWXCt9DzXTH',
  clientSecret: 'CO8KNZccxiwKG0gH'
});

amadeus.client.get('/v1/shopping/flight-destinations', { origin: 'LAX' }) //to get all possible flights from departure place X
.then(function(response){
  console.log(response.data);
  }).catch(function(responseError){
  console.log(responseError.code);
  });;
//
// amadeus.client.get('/v2/reference-data/locations/airports',  'LAX' ) //to get all possible flights from departure place X
// .then(function(response){
//   console.log(response.data);
//   }).catch(function(responseError){
//   console.log(responseError.code);
//   });;