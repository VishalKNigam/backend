const jwt = require("jsonwebtoken");
const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        try{
            const decoded = jwt.verify(token,"masai");
            if(decoded){
                next();
            }else{
                res.send({"msg": "Please Login"})
            }
        }catch(err){
            res.send({"err": err.message})
        }
    }else{
        res.send({"msg": "please login!!"})
    }
}
module.exports = {auth}