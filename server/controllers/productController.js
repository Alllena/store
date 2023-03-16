// const uuid = require("uuid");
// const path = require("path");
const { Product, Img } = require("../models/models");
const ApiError = require("../error/ApiError");

class productController {
  async create(req, res, next) {
    try {
      let { modelId, price, sales, typeId, colorId, sizeId, imgId } = req.body;

      const product = await Product.create({
        modelId,
        price,
        sales,
        typeId,
        colorId,
        sizeId,
        imgId,
      });

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, modelId, colorId, sizeId, limit, page } = req.query;
    limit = limit || 20;
    page = page || 1;
    let offset = page * limit - limit;
    let products;

    const check = {
      ...(typeId && { typeId }),
      ...(modelId && { modelId }),
      ...(colorId && { colorId }),
      ...(sizeId && { sizeId }),
    };
    console.log(check);
    products = await Product.findAndCountAll({
      where: check,
      limit,
      offset,
    });

    return res.json(products);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: Img, as: "img" }],
      // include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(product);
  }
}
module.exports = new productController();
