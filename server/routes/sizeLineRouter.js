const Router = require("express");
const router = new Router();
const sizeLineController = require("../controllers/sizeLineController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", sizeLineController.create);
// router.post("/", checkRole("ADMIN"), sizeLineController.create);
router.get("/", sizeLineController.getAll);

module.exports = router;
