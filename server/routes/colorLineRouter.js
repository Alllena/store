const Router = require("express");
const router = new Router();
const colorLineController = require("../controllers/colorLineController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", colorLineController.create);
// router.post("/", checkRole("ADMIN"), colorLineController.create);
router.get("/", colorLineController.getAll);

module.exports = router;
