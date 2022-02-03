// DELETE THIS LINE
// var selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var User = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
var selectAll = function (req, res) {
  Item.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};


    var signUp =function(req,res){
        
      var userData ={
        email :req.body.email,
        password :req.body.password,
        name :req.body.name,
        lastname:req.body.lastname,
        bd :req.body.bd,
        country :req.body.country,
        phoneNumber :req.body.phoneNumber
      }
     User.create(userData,(err,data)=>{
      if(err){
          res.send("error")
      } else{
          res.send(data)
      } 
     }) 
    }
    var login =function(req,res){
        User.findOne({"email":req.body.email},(err,user)=>{
            if(!user)
                res.send("user not found")
           user.comparePassword(req.body.password,(err,isMatch)=>{
               if(err){
                   res.send("bad password")
               }else{
                   res.send(isMatch)
               }
           }) 
            
        })
    }
// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = {  signUp,login};
