const { Size } = require("../models/models");
// const ApiError = require("../error/ApiError");

class SizeController {
  async create(req, res) {
    const { name } = req.body;
    const size = await Size.create({ name });
    return res.json(size);
  }
  async getAll(req, res) {
    const sizes = await Size.findAll();
    return res.json(sizes);
  }
  async destroy(req, res) {
    const { id } = req.body;
    const data = await Size.destroy({ where: { id } });
    return res.json(data);
  }
  async update(req, res) {
    const { id, name } = req.body;
    const data = await Size.update({ name }, { where: { id } });
    return res.json(data);
  }
}
module.exports = new SizeController();
