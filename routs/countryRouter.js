const contryController = require("../controllers/countryController");
const router = require("express").Router();

router.post("/add", contryController.addCountry);
router.get("/get/:id", contryController.getCountry);
router.post("/createContryCapital", contryController.createCountyAndCapital);

module.exports = router;
