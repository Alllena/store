// const roles = require("../constants/roles");
const Router = require("express");
const router = new Router();
const imgController = require("../controllers/imgController");
const checkRole = require("../middleware/checkRoleMiddleware");

// router.post("/", checkRole(roles.ADMIN), imgController.create);
router.post("/", imgController.create);
router.get("/", imgController.getAll);

module.exports = router;
