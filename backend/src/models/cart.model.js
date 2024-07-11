const { DataTypes, INTEGER } = require("sequelize");
const db = require("../db");

const Carts = db.pgConn.define("Carts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Carts;
