const Users = require("./user.model");
const Products = require("./product.model");
const Carts = require("./cart.model");
const CartProducts = require("./cartProducts.model");

Users.hasMany(Products, {
  foreignKey: {
    name: "sellerId",
  },
});
Products.belongsTo(Users, {
  foreignKey: {
    name: "sellerId",
  },
});

Users.hasOne(Carts, {
  foreignKey: {
    name: "userId",
  },
});
Carts.belongsTo(Users, {
  foreignKey: {
    name: "userId",
  },
});

Carts.hasMany(CartProducts, {
  foreignKey: {
    name: "cartId",
  },
});
CartProducts.belongsTo(Carts, {
  foreignKey: {
    name: "cartId",
  },
});
Products.hasMany(CartProducts, {
  foreignKey: {
    name: "productId",
  },
});
CartProducts.belongsTo(Products, {
  foreignKey: {
    name: "productId",
  },
});

module.exports = {
  Users,
  Products,
  Carts,
  CartProducts,
};
