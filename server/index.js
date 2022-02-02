const express = require("express");
const itemRoutes = require('./routes/item.routes')
var Amadeus = require('amadeus');
var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

var amadeus = new Amadeus({
  clientId: 'FaAGy9uXQC45C5kx7iGMcqCIDnOz30Wb',
  clientSecret: 'xr6kuyRNV9HUUDco'
});
amadeus.referenceData.locations.get({
  keyword: 'FCO',
  subType: 'AIRPORT,CITY'
}).then(function(response){
  console.log(response.data); // first page
  return amadeus.next(response);
}).then(function(nextResponse){
  console.log(nextResponse.data); // second page
});
// amadeus.client.get('/v1/shopping/flight-destinations', { origin: 'LAX' }) //to get all possible flights from departure place X
// .then(function(response){
//   console.log(response.data);
//   }).catch(function(responseError){
//   console.log(responseError.code);
//   });;
//
// amadeus.client.get('/v2/reference-data/locations/airports',  'LAX' ) //to get all possible flights from departure place X
// .then(function(response){
//   console.log(response.data);
//   }).catch(function(responseError){
//   console.log(responseError.code);
//   });;