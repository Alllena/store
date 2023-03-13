const Router = require("express");
const router = new Router();
const specsController = require("../controllers/specsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), specsController.create);
router.get("/", specsController.getAll);

module.exports = router;
