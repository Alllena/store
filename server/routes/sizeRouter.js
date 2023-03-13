const Router = require("express");
const router = new Router();
const sizeController = require("../controllers/sizeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), sizeController.create);
router.get("/", sizeController.getAll);

module.exports = router;
