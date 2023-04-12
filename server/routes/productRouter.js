const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), productController.create);
router.get("/:colorId/:modelId", productController.getOne);
router.put("/destroy/", checkRole("ADMIN"), productController.destroy);
router.post("/update/destroy/", checkRole("ADMIN"), productController.update);

module.exports = router;
