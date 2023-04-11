const { Color } = require("../models/models");
// const ApiError = require("../error/ApiError");

class ColorController {
  async create(req, res) {
    const { name } = req.body;
    const color = await Color.create({ name });
    return res.json(color);
  }
  async getAll(reg, res) {
    const colors = await Color.findAll();
    return res.json(colors);
  }
  async destroy(req, res) {
    const { id } = req.body;
    const data = await Color.destroy({ where: { id } });
    return res.json(data);
  }
  async update(req, res) {
    const { id, name } = req.body;
    const data = await Color.update({ name }, { where: { id } });
    return res.json(data);
  }
}
module.exports = new ColorController();
