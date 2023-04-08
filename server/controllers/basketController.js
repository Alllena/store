const { Basket, Size, Product, Model } = require("../models/models");
// const ApiError = require("../error/ApiError");

class BasketController {
  async create(req, res) {
    const { count, userId, productId, sizeId } = req.body;
    const basket = await Basket.create({ count, userId, productId, sizeId });
    return res.json(basket);
  }
  async getAll(req, res) {
    let { basketId } = req.query;
    let baskets = await Basket.findAndCountAll({
      where: basketId,
      attributes: ["id", "count"],
      include: [
        {
          model: Size,
          attributes: ["id", "name"],
        },
        {
          model: Product,
          attributes: [id],
          include: [
            {
              model: Color,
              attributes: ["id", "name"],
              through: {
                attributes: [],
              },
            },
            {
              model: Model,
              attributes: ["id", "name"],
              through: {
                attributes: [],
              },
            },
            {
              model: Img,
              attributes: ["id", "isMain", file],
            },
          ],
        },
      ],
    });

    const sizes = await Basket.findAll();
    return res.json(baskets);
  }
}
module.exports = new BasketController();
