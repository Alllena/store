const Router = require("express");
const router = new Router();
const specController = require("../controllers/specController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", specController.create);
// router.post("/", checkRole("ADMIN"), specController.create);
router.get("/", specController.getAll);

module.exports = router;
