const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/", basketController.create);
router.post("/update/", basketController.update);
router.get("/", basketController.getAll);

module.exports = router;
