const { db } = require("../models");

const Review = db.reviews;

const addReview = async (req, res) => {
  console.log(req.body);
  let info = {
    rating: req.body.rating,
    desription: req.body.description,
  };
  let review = await Review.create(info);
  res.status(200).send(review);
};

const getAllReviews = async (req, res) => {
  let result = await Review.findAll();
  res.status(200).send(reesult);
};

const getOneReview = async (req, res) => {
  let id = req.params.id;
  //let details=req.body;
  let result = await Review.update({ where: { id: id } });
  res.status(200).send(result);
};

const updateReview = async (req, res) => {
  let id = req.params.id;
  let details = req.body;
  let reesult = await Review.update(details, { where: { id: id } });
  res.status(200).send(result);
};

const deleteReview = async (req, res) => {
  let id = req.params.id;
  let result = await Review.destroy({ where: { id: id } });
};

module.exports = {
  addReview,
};
