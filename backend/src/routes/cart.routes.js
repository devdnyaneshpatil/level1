const { addProductToCartController, getCartProductsController, removeProductFromCartController } = require("../controllers/cart.controllers")
const auth = require("../middlewares/auth.middleware")

const cartRouter = require("express").Router()

cartRouter.post("/add/:id", auth, addProductToCartController)
cartRouter.get("/", auth, getCartProductsController)
cartRouter.post("/remove/:id",auth,removeProductFromCartController)

module.exports=cartRouter