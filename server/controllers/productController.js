// const uuid = require("uuid");
// const path = require("path");
const {
  Product,
  Img,
  SizeLine,
  ColorLine,
  Color,
  Size,
} = require("../models/models");
const ApiError = require("../error/ApiError");

class productController {
  async create(req, res, next) {
    try {
      let { name, info, price, sales, typeId } = req.body;

      const product = await Product.create({
        name,
        info,
        price,
        sales,
        typeId,
      });

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    limit = limit || 20;
    page = page || 1;
    let offset = page * limit - limit;
    let products;

    const check = {
      ...(typeId && { typeId }),
    };
    console.log(check);
    products = await Product.findAndCountAll({
      where: check,
      attributes: ["id", "name", "price", "sales"],
      include: [
        {
          model: Color,
          attributes: ["id", "name"],
          through: {
            attributes: [
              /* атрибуты соединительной таблицы */
            ],
          },
        },
        {
          model: Size,
          attributes: ["id", "name"],
          through: {
            attributes: [
              /* атрибуты соединительной таблицы */
            ],
          },
        },
      ],

      // include: [{ model: SizeLine, model: ColorLine }],
      limit,
      offset,
    });

    return res.json(products);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      // include: [{ model: Color }],
      // include: [{ model: SizeLine }],
    });
    return res.json(product);
  }
}

module.exports = new productController();
