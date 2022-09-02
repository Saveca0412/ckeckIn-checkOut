const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "0412",
  port: 5432,
  database: "blogs",
  logging: false,
});

module.exports = { db, DataTypes };
