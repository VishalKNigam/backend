const express = require("express");
const {BlogModel} = require("../model/blog.Model");
const {UserModel} = require("../model/user.Model");
const blogRouter  = express.Router();
blogRouter.get("/",async(req,res)=>{
    try{
        let blog = await BlogModel.find()
        res.status(200).send(blog);

    }catch(err){
        console.log({"err": err});
        res.status(400).send({"err": err.message})

    }

})
blogRouter.post("/add", async(req,res)=>{
    try{
        let blog = new BlogModel(req.body);
        await blog.save();
        res.status(200).send(`${blog.user} created articles`);

    }catch(err){
        console.log({"err": err});
        res.status(400).send({"err": err.message})

    }
})
blogRouter.patch("edit/:id", async(req,res)=>{
    
        let {articleID} = req.params;
        let  article = BlogModel.findOne({_id: articleID});
        try{
            await BlogModel.findOneAndUpdate({_id: articleID},req.body);
            res.status(200).send({"msg": "Updated Sucessfully!!"})


    }catch(err){
        console.log({"err": err});
        res.status(400).send({"err": err.message})

    }
})
blogRouter.delete("rem/:id", async(req,res)=>{
    
    let {articleID} = req.params;
    let  article = BlogModel.findOne({_id: articleID});
    try{
        await BlogModel.findOneAndUpdate({_id: articleID},req.body);
        res.status(200).send({"msg": "Updated Sucessfully!!"})


}catch(err){
    console.log({"err": err});
    res.status(400).send({"err": err.message})

}
})
module.exports = {blogRouter}