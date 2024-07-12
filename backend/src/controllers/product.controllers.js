const { Op } = require("sequelize");
const productContext = require("../db/context/product.context");
const addProductController = async (req, res) => {
  const { name, category, price } = req.body;
  try {
    if (!name || !category || !price) {
      return res.status(400).json({ msg: "Mandatory fields required" });
    }
    const isProductAlreadyExist = await productContext.getProductByNameAndId(
      name,
      req.userId
    );
    if (isProductAlreadyExist) {
      return res.status(429).json({ msg: "Product already present" });
    }
    req.body.sellerId = req.userId;
    const newProduct = await productContext.addProduct(req.body);
    return res
      .status(201)
      .json({ msg: "Product added successfully", newProduct });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const updateProductController = async (req, res) => {
  const productId = req.params.id;
  const sellerId = req.userId;
  try {
    const product = await productContext.getProductById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    if (product.sellerId !== sellerId) {
      return res.status(421).json({ msg: "You cannot update this product" });
    }
    await productContext.updateProduct(productId, req.body);
    return res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const deleteProductController = async (req, res) => {
  const productId = req.params.id;
  const sellerId = req.userId;
  try {
    const product = await productContext.getProductById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    if (product.sellerId !== sellerId) {
      return res.status(421).json({ msg: "You cannot delete this product" });
    }
    await productContext.deleteProduct(productId);
    return res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const getAllProductsController = async (req, res) => {
  const { search,page=1,limit=0 } = req.query;
  try {
    let whereClause = {};
    //if search is present then modify the whereclause
    if (search) {
      whereClause = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { category: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }
    const offset=(page-1)*limit
    const products = await productContext.getAllProducts(whereClause,offset,limit);
    return res.status(200).json({ data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const getProductController = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productContext.getProductById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
      }
      return res.status(200).json({data:product})
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

module.exports = {
  addProductController,
  updateProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
};
