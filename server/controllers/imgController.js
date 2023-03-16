const uuid = require("uuid");
const path = require("path");

const { Img } = require("../models/models");
// const ApiError = require("../error/ApiError");

class imgController {
  async create(req, res) {
    const collectionImg = req.files;
    const { colorLineId } = req.body;

    let imgFileName = {};
    for (let key in collectionImg) {
      let fileName = uuid.v4() + ".jpg";
      collectionImg[key].mv(path.resolve(__dirname, "..", "static", fileName));
      imgFileName[key] = fileName;
    }

    const img = await Img.create({
      colorLineId,
      ...imgFileName,
    });

    return res.json(img);
  }
  async getAll(reg, res) {
    const imgs = await Img.findAll();
    return res.json(imgs);
  }
}

module.exports = new imgController();
