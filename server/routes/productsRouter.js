const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");
// const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", productController.create);
// router.post("/", checkRole("ADMIN"), productController.create);
router.get("/", productController.getAll);

module.exports = router;
