const { Model, ModelColor } = require("../models/models");
const ApiError = require("../error/ApiError");

class ModelController {
  async create(req, res, next) {
    try {
      const { name, colors } = req.body;
      const model = await Model.create({ name });

      if (colors) {
        // colors = JSON.parse(colors);
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
    const models = await Model.findAll();
    return res.json(models);
  }
}
module.exports = new ModelController();
