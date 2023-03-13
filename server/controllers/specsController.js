const { Specs } = require("../models/models");
// const ApiError = require("../error/ApiError");

class SpecsController {
  async create(req, res) {
    const { name } = req.body;
    const specs = await Specs.create({ name });
    return res.json(specs);
  }
  async getAll(reg, res) {
    const specs = await Specs.findAll();
    return res.json(specs);
  }
}
module.exports = new SpecsController();
