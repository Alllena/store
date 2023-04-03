const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const productsRouter = require("./productsRouter");
const userRouter = require("./userRouter");
const colorRouter = require("./colorRouter");
const sizeRouter = require("./sizeRouter");
const modelRouter = require("./modelRouter");
const typeRouter = require("./typeRouter");
const imgRouter = require("./imgRouter");

router.use("/shop", productsRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/color", colorRouter);
router.use("/size", sizeRouter);
router.use("/model", modelRouter);
router.use("/img", imgRouter);

module.exports = router;
