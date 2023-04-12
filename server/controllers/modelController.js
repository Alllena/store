const { Model, ModelColor, Color } = require("../models/models");
const ApiError = require("../error/ApiError");

class ModelController {
  async create(req, res, next) {
    try {
      const { name, colors } = req.body;
      console.log("_________model________", req.body);
      const model = await Model.create({ name });
      if (colors) {
        colors.forEach((i) =>
          ModelColor.create({
            colorId: i.colorId,
            modelId: model.id,
          })
        );
      }
      return res.json(model);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const models = await Model.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Color,
          attributes: ["id", "name"],
        },
      ],
    });
    return res.json(models);
  }
  async destroy(req, res) {
    const { id } = req.body;
    const data = await Model.destroy({ where: { id } });
    return res.json(data);
  }
  async update(req, res) {
    const { id, name } = req.body;
    const data = await Model.update({ name }, { where: { id } });
    return res.json(data);
  }
}
module.exports = new ModelController();
