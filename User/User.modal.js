const mongoose=require('mongoose')
const UserSchema= new mongoose.Schema({
    productid:String,
    quantity:Number
})
const User=mongoose.model("user",UserSchema);
module.exports=User;