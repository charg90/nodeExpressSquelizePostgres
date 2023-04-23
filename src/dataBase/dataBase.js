import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "nodeSequelize",
  "postgres",
  "postgres",
  {
    host: "localhost",
    port: 28137,
    dialect: "postgres",
  }
);
