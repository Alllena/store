const {
  Basket,
  Size,
  Product,
  Model,
  Color,
  Type,
  Img,
} = require("../models/models");
// const ApiError = require("../error/ApiError");

class BasketController {
  async create(req, res) {
    let { count, userId, productId, sizeId } = req.body;
    const basket = await Basket.create({ count, userId, productId, sizeId });
    return res.json(basket);
  }

  async update(req, res) {
    const { id, count } = req.query;
    const basket = await Basket.update({ count }, { where: { id } });
    return res.json(basket);
  }
  async destroy(req, res) {
    const { id } = req.body;
    const basket = await Basket.destroy({ where: { id } });
    return res.json(basket);
  }

  async getAll(req, res) {
    let { userId } = req.query;
    let baskets;
    const check = {
      ...(userId && { userId }),
    };

    baskets = await Basket.findAll({
      where: check,
      attributes: ["id", "count", "userId"],
      include: [
        {
          model: Size,
          attributes: ["id", "name"],
        },
        {
          model: Product,
          attributes: ["id", "price", "sales"],
          include: [
            {
              model: Model,
              attributes: ["id", "name"],
            },
            {
              model: Color,
              attributes: ["id", "name"],
            },
            {
              model: Type,
              attributes: ["id", "name"],
            },
            {
              where: { isMain: true },
              model: Img,
              attributes: ["id", "file"],
            },
          ],
        },
      ],
    });
    return res.json(baskets);
  }
}
module.exports = new BasketController();
