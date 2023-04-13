const roles = require("../constants/roles");
const Router = require("express");
const router = new Router();
const modelController = require("../controllers/modelController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole(roles.ADMIN), modelController.create);
router.get("/", modelController.getAll);
router.put("/destroy/", checkRole(roles.ADMIN), modelController.destroy);
router.post("/update/destroy/", checkRole(roles.ADMIN), modelController.update);

module.exports = router;
