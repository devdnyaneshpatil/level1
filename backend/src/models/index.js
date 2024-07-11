const Users = require("./user.model");
const Products = require("./product.model");
const Carts = require("./cart.model");

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

module.exports = {
  Users,
  Products,
  Carts,
};
