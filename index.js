const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connection } = require("./db");
const { UserModel } = require("./model/user.Model");
// const { BlogModel } = require("./model/blog.Model");

const { userRouter } = require("./routes/user.Routes");
const { blogRouter } = require("./routes/blog.Routes");
const { auth } = require("./middlewares/auth");
app.use(auth);

app.use("/users", userRouter)
app.use("/articles",blogRouter)

//const {connection} = require("connection")








app.listen(8080, async(req,res)=>{
    try{
        await connection;
       console.log("Connected to the DB")
       console.log("Listening to the port 8080")

    }catch(err){
        console.log(err);
        res.send("cannot connect to the DB");
    }
    
})