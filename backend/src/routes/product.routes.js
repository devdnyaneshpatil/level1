const {
  addProductController,
  updateProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
} = require("../controllers/product.controllers");
const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const productRouter = require("express").Router();

//<<<<<<<<<<<<< only for Seller >>>>>>>>>>>>>>>>>>>>>//
productRouter.post("/add", auth,authorize(["Seller"]),addProductController);
productRouter.patch("/:id",auth,authorize(["Seller"]), updateProductController);
productRouter.delete("/:id",auth,authorize(["Seller"]), deleteProductController);

//<<<<<<<<<<<<<  for both Seller and Buyer >>>>>>>>>>>>>>>>>>>>>//
productRouter.get("/", getAllProductsController);
productRouter.get("/:id", getProductController);

module.exports = productRouter;
