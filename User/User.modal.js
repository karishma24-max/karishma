const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    productid:{
        type:String},
    quantity:{
        type:Number},
    
},
{
    timestamps: true,
    versionKey: false,
  })
const User=mongoose.model("user",UserSchema);
module.exports=User;