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
}
module.exports = new ColorController();
