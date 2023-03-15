const { Model } = require("../models/models");
// const ApiError = require("../error/ApiError");

class modelController {
  async create(req, res) {
    const { name, info } = req.body;
    const model = await Model.create({ name, info });
    return res.json(model);
  }
  async getAll(reg, res) {
    const models = await Model.findAll();
    return res.json(models);
  }
}
module.exports = new modelController();
