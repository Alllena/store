const roles = require("../constants/roles");
const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(roles.ADMIN), typeController.create);
router.get("/", typeController.getAll);
router.put("/destroy/", checkRole(roles.ADMIN), typeController.destroy);
router.post("/update/destroy/", checkRole(roles.ADMIN), typeController.update);

module.exports = router;
