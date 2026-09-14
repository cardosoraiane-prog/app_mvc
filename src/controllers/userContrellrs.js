const{User}= require("../models")

exports.getAll=async(req,res)=>{
    const users= await User.findALL()
    req.json(users)
}