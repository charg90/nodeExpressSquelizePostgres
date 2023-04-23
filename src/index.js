import app from "./app.js";
import { sequelize } from "./dataBase/dataBase.js";
import "./models/user.js";
import "./models/tweets.js";
async function main() {
  try {
    await sequelize.sync();
    console.log("connect to database");
  } catch (e) {
    console.log(e);
  }

  app.listen(3000);
  console.log("server is listening port 3000");
}

main();
