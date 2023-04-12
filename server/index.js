require("dotenv").config();
const models = require("./models/models");
const express = require("express");
const fileUpload = require("express-fileupload");
const sequelize = require("./db");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
// обработка ошибок, должен быть последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on ${PORT}`));
  } catch (e) {}
};

start();
