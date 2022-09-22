const { db } = require("../models/index");
// main model
const Product = db.products;

// const Rreview = db.reviews;

//main Work

// 1. Create Product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  let product2 = await Product.create(info);
  res.status(200).send(product2);
};

// 2 get all Products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    /*  logger: console.log */
  });

  res.status(200).send(products);
};
// 3 get one Products
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4.Update Product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// delete Product by id
const delteProduct = async (req, res) => {
  let id = req.body.id;
  let resou = await Product.destroy({ where: { id: id } });
  res.status(200).send("Product Deleted");
};

const publishProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(
    { published: true },
    { where: { id: id } }
  );
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  delteProduct,
};
