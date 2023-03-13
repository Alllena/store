const uuid = require("uuid");
const path = require("path");
const { Product, ProductImg } = require("../models/models");
const ApiError = require("../error/ApiError");

class productController {
  async create(req, res, next) {
    try {
      let { name, price, sales, info, typeId, specsId, colorId, sizeId } =
        req.body;

      const product = await Product.create({
        name,
        price,
        sales,
        info,
        typeId,
        specsId,
        colorId,
        sizeId,
      });

      // if (info) {
      //   info = JSON.parse(info);
      //   info.forEach((i) =>
      //     DeviceInfo.create({
      //       title: i.title,
      //       description: i.description,
      //       deviceId: device.id,
      //     })
      //   );
      // }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, specsId, colorId, sizeId, limit, page } = req.query;
    limit = limit || 20;
    page = page || 1;
    let offset = page * limit - limit;
    let products;

    const check = {
      ...(typeId && { typeId }),
      ...(specsId && { specsId }),
      ...(colorId && { colorId }),
      ...(sizeId && { sizeId }),
    };

    if (check.length > 0) {
      products = await Product.findAndCountAll({
        where: check,
        limit,
        offset,
      });
    } else {
      products = await Product.findAndCountAll({
        limit,
        offset,
      });
    }

    return res.json(products);
  }

  // async getOne(req, res) {
  //   const { id } = req.params;
  //   const product = await Product.findOne({
  //     where: { id },
  //     include: [{ model: ProductImg, as: "img" }],
  //   });
  //   return res.json(product);
  // }
}
module.exports = new productController();
