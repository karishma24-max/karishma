const express=require('express')
const server=express()
const connect= require("./Config/db.js")
const cors=require('cors')
server.use(express.json())
server.use(cors())
const User=require("./User/User.modal.js")

server.get("/",async(req,res)=>{
    try{
        res.send("connected")
    }
    catch(e){
        res.send(e)
    }
})

server.post("/user",async(req,res)=>{
    try{
        let { productid, quantity} = req.body
        
    let user =  new User({
        productid:productid,
quantity:quantity
    })
    console.log(user)
    await user.save()

    res.send(user)

    }
    catch(e){
        res.send(e)
    }
})

server.delete("/userdelete/:id",async(req,res)=>{
    const id=req.params
    
    const user= await User.find(id)
    if(user){
        const userdetail=User.delete(id)
        res.send("Product sucessfully delete")
    }
    else
    {
res.send("Product not found")
    }
   

})

server.listen(8080,async(req,res)=>{
    try{
        await connect();
        console.log('Database connected')
    }
    catch(e){
        console.log(e)
    }
    console.log("server listening at port $(8080)")
})