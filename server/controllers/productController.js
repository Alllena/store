// const uuid = require("uuid");
// const path = require("path");
const {
  Product,
  Model,
  Size,
  Type,
  Color,
  ProductSize,
  Img,
} = require("../models/models");
const ApiError = require("../error/ApiError");

class productController {
  async create(req, res, next) {
    try {
      let { info, price, sales, isNew, typeId, modelId, colorId, sizesId } = req.body.data;

      const product = await Product.create({
        modelId,
        isNew,
        info: info ?? "",
        price,
        sales,
        typeId,
        colorId,
      });
     
      if (sizesId) {
        for (const id of sizesId) {
          await ProductSize.create({
            sizeId: id,
            productId: product.dataValues.id,
          })
        }
      }

      const updatedProduct = await Product.findOne({
        where: {id: product.dataValues.id},
        attributes: ["id", "price", "sales", "isNew"],
        include: [
          {
            model: Color,
            attributes: ["id", "name"],
          },
          {
            model: Img,
            attributes: ["id", "isMain", "isSecond", "file"],
          },
          {
            model: Size,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
          {
            model: Model,
            attributes: ["id", "name"],
            include: [
              {
                model: Color,
                attributes: ["id", "name"],
                through: {
                  attributes: [],
                },
              },
            ],
          },
        ],
      });

      return res.json(updatedProduct);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, colorId, limit, page, isNew, sales } = req.query;
    limit = limit || 20;
    page = page || 1;
    let offset = page * limit - limit;
    let products;

    const { Op, or } = require("sequelize");

    const check = {
      ...(typeId && { typeId }),
      ...(colorId && { colorId }),
      ...(isNew && { isNew }),
      ...(sales && { sales: { [Op.ne]: 0 } }),
    };

    products = await Product.findAndCountAll({
      where: check,
      attributes: ["id", "price", "sales", "isNew"],
      include: [
        {
          model: Color,
          attributes: ["id", "name"],
        },
        {
          model: Img,
          attributes: ["id", "isMain", "isSecond", "file"],
        },
        {
          model: Size,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Model,
          attributes: ["id", "name"],
          include: [
            {
              model: Color,
              attributes: ["id", "name"],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
      limit,
      offset,
    });

    return res.json(products);
  }

  async getOne(req, res) {
    const { colorId, modelId } = req.params;
    const check = {
      ...(modelId && { modelId }),
      ...(colorId && { colorId }),
    };

    const product = await Product.findOne({
      where: check,
      attributes: ["id", "price", "sales", "isNew", "info"],
      include: [
        {
          model: Color,
          attributes: ["id", "name"],
        },
        {
          model: Type,
          attributes: ["id", "name"],
        },
        {
          model: Img,
          attributes: ["id", "isMain", "isSecond", "file"],
        },
        {
          model: Size,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Model,
          attributes: ["id", "name"],
          include: [
            {
              model: Color,
              attributes: ["id", "name"],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    });
    return res.json(product);
  }

  async destroy(req, res) {
    const { id } = req.body;
    const data = await Product.destroy({ where: { id } });
    return res.json(data);
  }
  async update(req, res) {
    const { id, model } = req.body;
    const data = await Product.update({ model }, { where: { id } });
    return res.json(data);
  }
}

module.exports = new productController();
