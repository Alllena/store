const { Type } = require("../models/models");
// const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(reg, res) {
    const types = await Type.findAll({
      attributes: ["id", "name"],
    });
    return res.json(types);
  }
  async destroy(req, res) {
    const { id } = req.body;
    const data = await Type.destroy({ where: { id } });
    return res.json(data);
  }
  async update(req, res) {
    const { id, name } = req.body;
    const data = await Type.update({ name }, { where: { id } });
    return res.json(data);
  }
}
module.exports = new TypeController();
