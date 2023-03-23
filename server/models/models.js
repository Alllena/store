const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  info: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  sales: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Img = sequelize.define("img", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mainView: { type: DataTypes.STRING, allowNull: false },
  secondView: { type: DataTypes.STRING, allowNull: false },
  topView: { type: DataTypes.STRING, allowNull: false },
  sideView: { type: DataTypes.STRING, allowNull: false },
  bottomView: { type: DataTypes.STRING, allowNull: false },
  fastenerView: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Size = sequelize.define("size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Color = sequelize.define("color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const ColorLine = sequelize.define("color_line", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const SizeLine = sequelize.define("size_line", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const ColorSize = sequelize.define("color_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(SizeLine);
SizeLine.belongsTo(Product);

Product.hasMany(ColorLine);
ColorLine.belongsTo(Product);

Color.hasMany(ColorLine);
ColorLine.belongsTo(Color);

Size.hasMany(SizeLine);
SizeLine.belongsTo(Size);

Type.hasMany(Product);
Product.belongsTo(Type);

ColorLine.hasOne(Img);
Img.belongsTo(ColorLine);

Color.belongsToMany(Product, { through: ColorLine });
Product.belongsToMany(Color, { through: ColorLine });

Size.belongsToMany(Product, { through: SizeLine });
Product.belongsToMany(Size, { through: SizeLine });

ColorLine.belongsToMany(SizeLine, { through: ColorSize });
SizeLine.belongsToMany(ColorLine, { through: ColorSize });

module.exports = {
  User,
  Basket,
  BasketProduct,
  Product,
  Img,
  Size,
  Type,
  Color,
  Rating,
  ColorSize,
  ColorLine,
  SizeLine,
};
