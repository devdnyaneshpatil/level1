const { PASSWORD_HASH_SALT, JWT_SECRET } = require("../config/constants")
const authContext = require("../db/context/auth.context")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")

const signupController = async (req, res) => {
    const {name,email,password,role="Buyer"}=req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({msg:"Mandatory fields are required"})
        }
        const isUserExist = await authContext.getUserByEmail(email)
        if (isUserExist) {
            return res.status(429).json({msg:"User already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, PASSWORD_HASH_SALT)
        const newUser = await authContext.createUser({ name, email, password: hashedPassword, role })
        const token = jwt.sign({ userId:newUser.id,userRole:newUser.role }, JWT_SECRET);
        return res.status(201).json({msg:"Signup successfull",token})
    } catch (error) {
        return res.status(500).json({msg:"Internal server error",error:error.message})
    }
}

const loginControlleer = async (req, res) => {
    
}

module.exports = { signupController,loginControlleer}