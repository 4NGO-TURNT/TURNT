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
  clientId: 'uudAgmNB2N4XzrXGKtraGSwCyxvy9BCs',
  clientSecret: 'z7ElNJADQoAKkf7r'
});
var iata
app.post('/api/user/iata', (req, res) => {
  iata = req.body.iata;
  console.log(iata)

  amadeus.client.get('/v1/shopping/flight-destinations', { origin: iata ,maxPrice:50}) //to get all possible flights from departure place X
    .then(function (response) {
      console.log(response.data);
      res.send(response.data)
    }).catch(function (responseError) {
      console.log(responseError.code);
      res.send(responseError.code)
    });
  
})
// amadeus.client.get('/v2/reference-data/locations/airports',  iata ) //to get all possible flights from departure place X
  // .then(function(response){
  //   console.log(response.data);
  //   }).catch(function(responseError){
  //   console.log(responseError.code,'err');
  //   });

//
//