const {DataTypes}=require("sequelize")
const sequelize=require("/src/config/database")
const { userInfo } = require("os")

const User=sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        alowNull:false
    },
    email:{
        type:DataTypes.STRING,
        alowNull:false
    },
    pasword:{
        type:DataTypes.STRING,
        alowNull:false
    },
})
module.exports=User

