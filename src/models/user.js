import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/dataBase.js";
import { Tweets } from "./tweets.js";
export const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

Users.hasMany(Tweets, {
  foreignKey: "userId",
  sourceKey: "id",
});

Tweets.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});
