const { ColorLine } = require("../models/models");
// const ApiError = require("../error/ApiError");

class colorLineController {
  async create(req, res) {
    const { productId, colorId } = req.body;
    const colorLine = await ColorLine.create({ productId, colorId });
    return res.json(colorLine);
  }
  async getAll(reg, res) {
    const colorLines = await ColorLine.findAll();
    return res.json(colorLines);
  }
}
module.exports = new colorLineController();
