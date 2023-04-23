import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/dataBase.js";

export const Tweets = sequelize.define("tweets", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
  },
});
