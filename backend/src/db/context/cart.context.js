const { Carts, CartProducts, Products } = require("../../models");

const getCartByUserId = async (userId) => {
  const cart = await Carts.findOne({
    where: {
      userId,
    },
  });
  return cart;
};

const createCart = async (userId) => {
  const cart = await Carts.create({ userId });
  return cart;
};

const cartDetails = async (cartId, productId) => {
  const details = await CartProducts.findOne({
    where: {
      cartId,
      productId,
    },
  });
  return details;
};
const createCartProduct = async (cartId, productId) => {
  const details = await CartProducts.create({
    cartId,
    productId,
  });
  return details;
};

const getCartProducts = async (cartId) => {
  const data = await CartProducts.findAll({
    where: {
      cartId,
    },
    include: [
      {
        model: Products,
        attributes: ["id", "name", "description", "price", "sellerId"],
      },
    ],
  });
  return data;
};

const removeCartProduct = async (cartId, productId) => {
  const result = await CartProducts.destroy({
    where: {
      cartId,
      productId,
    },
  });
  return result;
};

module.exports = {
  getCartByUserId,
  createCart,
  cartDetails,
  createCartProduct,
  getCartProducts,
  removeCartProduct,
};
