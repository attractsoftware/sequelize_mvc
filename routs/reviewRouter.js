const reviewController = require("../controllers/reviewController");

const router = require("express").Router();

router.post("/addReview", reviewController.addReview);

module.exports = router;
