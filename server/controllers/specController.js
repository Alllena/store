const { spec } = require("../models/models");
// const ApiError = require("../error/ApiError");

class specController {
  async create(req, res) {
    const { name } = req.body;
    const spec = await spec.create({ name });
    return res.json(spec);
  }
  async getAll(reg, res) {
    const specs = await spec.findAll();
    return res.json(specs);
  }
}
module.exports = new specController();
