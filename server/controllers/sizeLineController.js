const { SizeLine } = require("../models/models");
// const ApiError = require("../error/ApiError");

class sizeLineController {
  async create(req, res) {
    const { productId, sizeId } = req.body;
    const sizeLine = await SizeLine.create({ productId, sizeId });
    return res.json(sizeLine);
  }
  async getAll(reg, res) {
    const sizeLines = await SizeLine.findAll();
    return res.json(sizeLines);
  }
}
module.exports = new sizeLineController();
