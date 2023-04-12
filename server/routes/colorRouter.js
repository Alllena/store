const Router = require("express");
const router = new Router();
const colorController = require("../controllers/colorController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), colorController.create);
router.put("/destroy/", checkRole("ADMIN"), colorController.destroy);
router.post("/update/destroy/", checkRole("ADMIN"), colorController.update);
router.get("/", colorController.getAll);

module.exports = router;
