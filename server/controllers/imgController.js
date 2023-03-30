const uuid = require("uuid");
const path = require("path");

const { Img } = require("../models/models");
const ApiError = require("../error/ApiError");

class imgController {
  async create(req, res, next) {
    try {
      let { productId, isMain, isSecond } = req.body;
      let { file } = req.files;
      console.log(file);
      let fileName = uuid.v4() + ".jpg";
      file.mv(path.resolve(__dirname, "..", "static", fileName));

      const img = await Img.create({
        productId,
        isMain,
        isSecond,
        file: fileName,
      });

      return res.json(img);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(reg, res) {
    const imgs = await Img.findAll();
    return res.json(imgs);
  }
}

module.exports = new imgController();
