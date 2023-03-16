const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const colorRouter = require("./colorRouter");
const sizeRouter = require("./sizeRouter");
const colorLineRouter = require("./colorLineRouter");
const sizeLineRouter = require("./sizeLineRouter");
const typeRouter = require("./typeRouter");
const imgRouter = require("./imgRouter");

router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/color", colorRouter);
router.use("/size", sizeRouter);
router.use("/colorLine", colorLineRouter);
router.use("/sizeLine", sizeLineRouter);
router.use("/img", imgRouter);

module.exports = router;
