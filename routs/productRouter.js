const productController = require("../controllers/productController");

const router = require("express").Router();
router.post("/addProduct", productController.addProduct);
router.get("/getAllProduct", productController.getAllProducts);

router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.delteProduct);
module.exports = router;
