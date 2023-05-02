const express = require("express");
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 5;

const jwt = require("jsonwebtoken");
const {UserModel} = require("../model/user.Model");
userRouter.post("/register", (req,res)=>{
    const {name,email,password,city,age} = req.body;
    try{
        bcrypt.hash(password, saltRounds, async(err, hash)=> {
            // Store hash in your password DB.
            const user = new UserModel({name,email,password:hash,city,age});
            await user.save();
            res.status(200).send({"msg": "New User has been Registered"});

        })
        }catch(err){
        res.status(400).send({"err": err});
    }
})
userRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    try{
        const person = await UserModel.findOne({email});
        if(person){
            bcrypt.compare(password, person.password , (err, result)=> {
                var token = jwt.sign({ user: person.name, userID: person.id}, 'masai');
                res.status(200).send({"msg":"login Sucessfully!!","token":token})
                // result == true
            })
        }else{
            res.status(200).send({"msg":"Wrong Credentials!!"})
        }

    }catch(err){
        res.status(400).send({"err": err});
    }

})
module.exports = {userRouter};