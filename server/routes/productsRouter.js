const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/", productController.getAll);

module.exports = router;
