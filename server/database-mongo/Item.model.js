const mongoose = require("mongoose");
const db = require("./index.js");
const bcrypt=require("bcrypt")
const Salt = 10
const UserSchema = new mongoose.Schema({
  email :String,
  password :String,
  firstName :String,
  lastName :String,
  dob :Date,



  country :String,
  image:String,
  phoneNumber :String,
  search:[{
    departure:String,
    from:Date,
    to:Date,
    budget:Number,
    iata:String
  }]
});
UserSchema.pre("save",function(next){
  var user = this
  bcrypt.genSalt(Salt,function(err,salt){
    bcrypt.hash(user.password,salt,function(err,hash){
      if(err){
        return next(err)
      }else{
        user.password=hash
        next()
      }
    })
  })
  
})
UserSchema.methods.comparePassword=function(inputPass,callback){
  bcrypt.compare(inputPass,this.password,function(err,isMatch){
    if(err){
      callback(err,null)
    }else{
      callback(null,isMatch)
    }
  })
}

const User = mongoose.model("User", UserSchema);

module.exports = User;