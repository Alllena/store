const roles = require("../constants/roles");
const Router = require("express");
const router = new Router();
const colorController = require("../controllers/colorController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(roles.ADMIN), colorController.create);
router.put("/destroy/", checkRole(roles.ADMIN), colorController.destroy);
router.post("/update/destroy/", checkRole(roles.ADMIN), colorController.update);
router.get("/", colorController.getAll);

module.exports = router;
