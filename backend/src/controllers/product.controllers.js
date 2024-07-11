const addProductController = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const updateProductController = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const deleteProductController = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const getAllProductsController = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

const getProductController = async (req, res) => {
  try {
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
