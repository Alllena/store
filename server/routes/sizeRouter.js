const roles = require("../constants/roles");
const Router = require("express");
const router = new Router();
const sizeController = require("../controllers/sizeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(roles.ADMIN), sizeController.create);
router.get("/", sizeController.getAll);
router.put("/destroy/", checkRole(roles.ADMIN), sizeController.destroy);
router.post("/update/destroy/", checkRole(roles.ADMIN), sizeController.update);

module.exports = router;
