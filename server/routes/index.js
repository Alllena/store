const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const colorRouter = require("./colorRouter");
const sizeRouter = require("./sizeRouter");
const specRouter = require("./specRouter");
const typeRouter = require("./typeRouter");

router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/color", colorRouter);
router.use("/size", sizeRouter);
router.use("/spec", specRouter);

module.exports = router;
