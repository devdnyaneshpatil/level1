const { Products } = require("../../models");

const getProductByNameAndId = async (name, sellerId) => {
  const product = await Products.findOne({
    where: {
      name,
      sellerId,
    },
  });
  return product;
};

const addProduct = async (payload) => {
  const product = await Products.create(payload);
  return product;
};

const getProductById = async (id) => {
  const product = await Products.findByPk(id);
  return product;
};
const updateProduct = async (id, payload) => {
  const updatedProduct = await Products.update(payload, {
    where: {
      id,
    },
  });
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await Products.destroy({
    where: {
      id,
    },
  });
  return deletedProduct;
};

const getAllProducts = async (whereClause,offset,limit) => {
  const products = await Products.findAll({
    where: whereClause,
    offset,
    limit
  });
  return products;
};

module.exports = {
  getProductByNameAndId,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
