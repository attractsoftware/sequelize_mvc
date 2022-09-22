const capitalController = require("../controllers/capitalController");
const router = require("express").Router();

router.post("/add", capitalController.addCapital);
router.post("/assign", capitalController.assignCountry);

module.exports = router;
