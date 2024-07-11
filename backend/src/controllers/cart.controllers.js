const { Users, Products, Carts, CartProducts } = require("../models");
const cartContext = require("../db/context/cart.context");
const productContext = require("../db/context/product.context");

const addProductToCartController = async (req, res) => {
  const { quantity } = req.body;
  const productId = req.params.id;
  const userId = req.userId;
  console.log(productId, userId);
  try {
    // Find the user's cart or create one if it doesn't exist
    let cart = await cartContext.getCartByUserId(userId);
    if (!cart) {
      cart = await cartContext.createCart(userId);
    }

    // Find the product
    const product = await productContext.getProductById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // Check if the product already exists in the cart
    const cartProduct = await cartContext.cartDetails(cart.id, productId);

    if (cartProduct) {
      // Update the quantity if the product is already in the cart
      cartProduct.quantity = quantity;
      await cartProduct.save();
    } else {
      // Add the product to the cart
      await cartContext.createCartProduct(cart.id, productId);
    }
    return res.status(200).json({ msg: "Product added to cart successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const getCartProductsController = async (req, res) => {
  try {
    const cart = await cartContext.getCartByUserId(req.userId);
    if (!cart) {
      return res
        .status(404)
        .json({ msg: "You haven't added any items to cart yet" });
    }
    const products = await cartContext.getCartProducts(cart.id);
    return res.status(200).json({ data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const removeProductFromCartController = async (req, res) => {
  const productId = req.params.id;
  const userId = req.userId;

  try {
    // Find the user's cart
    const cart = await cartContext.getCartByUserId(userId);
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    // Find the product in the cart
    const cartProduct = await cartContext.cartDetails(cart.id, productId);
    if (!cartProduct) {
      return res.status(404).json({ msg: "Product not found in cart" });
    }

    // Remove the product from the cart
    await cartContext.removeCartProduct(cart.id, productId);

    return res
      .status(200)
      .json({ msg: "Product removed from cart successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

module.exports = {
  addProductToCartController,
  getCartProductsController,
  removeProductFromCartController,
};
