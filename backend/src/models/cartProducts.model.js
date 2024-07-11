const { DataTypes, INTEGER } = require("sequelize");
const db = require("../db");

const CartProducts = db.pgConn.define("CartProducts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = CartProducts;
