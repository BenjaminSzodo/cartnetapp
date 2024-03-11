require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { user } = require("./models/index");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cartnetapp`,
  { logging: false }
);

user(sequelize)


const { User } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
