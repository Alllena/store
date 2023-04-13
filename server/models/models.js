const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const roles = require("../constants/roles");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: roles.USER },
});

// const Basket = sequelize.define("basket", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// });

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  info: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  sales: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  isNew: { type: DataTypes.BOOLEAN, allowNull: false },
});

const Img = sequelize.define("img", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  isMain: { type: DataTypes.BOOLEAN, allowNull: false },
  isSecond: { type: DataTypes.BOOLEAN, allowNull: false },
  file: { type: DataTypes.STRING, allowNull: false },
});

const Model = sequelize.define("model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
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

const ProductSize = sequelize.define("product_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const ProductColor = sequelize.define("product_color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const ModelColor = sequelize.define("model_color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

// User.hasMany(Rating);
// Rating.belongsTo(User);

User.hasMany(Basket);
Basket.belongsTo(User);

Product.hasMany(Basket);
Basket.belongsTo(Product);

Size.hasMany(Basket);
Basket.belongsTo(Size);
// !_______________________

Product.hasMany(Img);
Img.belongsTo(Product);

// !______________________
Model.hasMany(Product);
Product.belongsTo(Model);

Type.hasMany(Product);
Product.belongsTo(Type);

Color.hasMany(Product);
Product.belongsTo(Color);
// !_______________________

Size.hasMany(ProductSize);
ProductSize.belongsTo(Size);

Product.hasMany(ProductSize);
ProductSize.belongsTo(Product);

// !_________________________
Product.hasMany(ProductColor);
ProductColor.belongsTo(Product);

Color.hasMany(ProductColor);
ProductColor.belongsTo(Color);

// !_________________________
Model.hasMany(ModelColor);
ModelColor.belongsTo(Model);

Color.hasMany(ModelColor);
ModelColor.belongsTo(Color);

Color.belongsToMany(Model, { through: ModelColor });
Model.belongsToMany(Color, { through: ModelColor });

Size.belongsToMany(Product, { through: ProductSize });
Product.belongsToMany(Size, { through: ProductSize });

Product.belongsToMany(Color, { through: ProductColor });
Color.belongsToMany(Product, { through: ProductColor });

module.exports = {
  User,
  Basket,
  // BasketProduct,
  Product,
  Img,
  Model,
  Size,
  Type,
  Color,
  // Rating,
  ModelColor,
  ProductColor,
  ProductSize,
};
