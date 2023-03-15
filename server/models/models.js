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
  price: { type: DataTypes.INTEGER, allowNull: false },
  sales: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  info: { type: DataTypes.STRING, allowNull: false },
});

const ProductImg = sequelize.define("product_img", {
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
  sales: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Spec = sequelize.define("spec", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Color = sequelize.define("color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const TypeSize = sequelize.define("type_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const TypeSpec = sequelize.define("type_spec", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const TypeColor = sequelize.define("type_color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const SpecSize = sequelize.define("spec_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const SpecColor = sequelize.define("spec_color", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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

Type.hasMany(Product);
Product.belongsTo(Type);

Size.hasMany(Product);
Product.belongsTo(Size);

Spec.hasMany(Product);
Product.belongsTo(Spec);

Color.hasMany(Product);
Product.belongsTo(Color);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasOne(ProductImg, { as: "img" });
ProductImg.belongsTo(Product);

Type.belongsToMany(Size, { through: TypeSize });
Size.belongsToMany(Type, { through: TypeSize });

Type.belongsToMany(Spec, { through: TypeSpec });
Spec.belongsToMany(Type, { through: TypeSpec });

Type.belongsToMany(Color, { through: TypeColor });
Color.belongsToMany(Type, { through: TypeColor });

Spec.belongsToMany(Size, { through: SpecSize });
Size.belongsToMany(Spec, { through: SpecSize });

Spec.belongsToMany(Color, { through: SpecColor });
Color.belongsToMany(Spec, { through: SpecColor });

Color.belongsToMany(Size, { through: ColorSize });
Size.belongsToMany(Color, { through: ColorSize });

module.exports = {
  User,
  Basket,
  BasketProduct,
  Product,
  ProductImg,
  Size,
  Type,
  Spec,
  Color,
  Rating,
  TypeSize,
  TypeSpec,
  TypeColor,
  SpecSize,
  SpecColor,
  ColorSize,
};
