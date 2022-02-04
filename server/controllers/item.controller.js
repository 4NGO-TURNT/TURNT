// DELETE THIS LINE
// var selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var User = require('../database-mongo/Item.model.js');
const nodemailer = require("nodemailer")

//var mail = require('../mail.js')

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
//  var selectAll = function (req, res) {
//    User.find({})
//   .then((items) => {
//      res.status(200).send(items);
//    })
//    .catch((error) => {
//      res.status(500).send(error);
//     });
//  };


    var signUp =function(req,res){
        
      var userData ={
        email:req.body.email,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        dob:req.body.dob,
        country:req.body.country,
        phoneNumber:req.body.phoneNumber,
        image:req.body.image
      }
  
     User.create(userData,(err,data)=>{
         
      if(err){
        
          res.send("error")
      } else if(data){
          res.send(data)
          sendConfirmation(req.body.email,req.body.firstName,req.body.lastName)
      } 
     }) 

    }
    var login = function(req,res){
        User.findOne({"email":req.body.email},(err,user)=>{
            if(!user)
                res.send("user not found")
           user.comparePassword(req.body.password,(err,isMatch)=>{
               if(err){
                   console.log("error")
               }else if(isMatch===true){

                   res.send(user)
               }else{
                   res.send("bad password")
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



const transporter =nodemailer.createTransport({
    service:"Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls:{
        ciphers:"SSLv3",
        rejectUnauthorized:false,
    },
    auth :{
        user:"aymenEX1@outlook.com",
        pass: "aymen123456789"
    },
   
});
const sendConfirmation = async (
    email,
    firstname,
    lastname
)=>{
    const mailOptions={
        from:"aymenEX1@outlook.com",
        to:email,
        subject:"Hello : Account",
        text:"Hello"+ " "+firstname+" " + lastname+" " +"Welcome to TRUNT"
        
    };

try {
    await transporter.sendMail(mailOptions,function(err,info){
        console.log(err)
        if(err){
            throw new Error(err)
        }
    })
}catch (err){
    throw new Error(err)
}
}


module.exports = {signUp,login,sendConfirmation};
