const {
  addProductController,
  updateProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
} = require("../controllers/product.controllers");
const auth = require("../middlewares/auth.middleware");

const productRouter = require("express").Router();

//<<<<<<<<<<<<< only for Seller >>>>>>>>>>>>>>>>>>>>>//
productRouter.post("/add", auth,addProductController);
productRouter.patch("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);

//<<<<<<<<<<<<<  for both Seller and Buyer >>>>>>>>>>>>>>>>>>>>>//
productRouter.get("/", getAllProductsController);
productRouter.get("/:id", getProductController);

module.exports = productRouter;
