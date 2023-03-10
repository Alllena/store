require("dotenv").config();
const models = require("./models/models");
const express = require("express");
const sequelize = require("./db");

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
