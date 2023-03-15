// const uuid = require("uuid");
// const path = require("path");
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
    console.log(check);
    products = await Product.findAndCountAll({
      where: check,
      limit,
      offset,
    });

    return res.json(products);
  }
}
module.exports = new productController();

//  let checkList = Object.entries(req.query)
//  checkList = checkList.filter(([key, value]) => value)

// let result = bookList.filter((item) => {
//   return checkList.every(([key, value]) => {
//     item[key] === value
//   })
// })
