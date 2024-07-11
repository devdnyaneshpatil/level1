const { signupController, loginControlleer } = require("../controllers/auth.controllers")

const authRouter = require("express").Router()

authRouter.post("/signup", signupController)
authRouter.post("/login", loginControlleer)

module.exports=authRouter