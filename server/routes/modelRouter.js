const Router = require("express");
const router = new Router();
const modelController = require("../controllers/modelController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), modelController.create);
router.get("/", modelController.getAll);
router.put("/destroy/", checkRole("ADMIN"), modelController.destroy);
router.post("/update/destroy/", checkRole("ADMIN"), modelController.update);

module.exports = router;
