const { Router } = require("express");
const { getProducts, getByIdP, postProduct, putProduct, deleteProduct } = require("../controllers");



const router = Router();

router.get("/",getProducts);
router.get("/:id",getByIdP);
router.post("/",postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

module.exports = router;