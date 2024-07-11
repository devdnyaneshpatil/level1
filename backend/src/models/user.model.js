const {DataTypes, INTEGER}=require("sequelize")
const db=require("../db")

const Users=db.pgConn.define("Users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role: {
        type: DataTypes.ENUM("Buyer", "Seller"),
        defaultValue:"Buyer"
    }
})

module.exports=Users