const eventSeed = require("./eventSeed");
const profileSeed = require("./profileSeed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await eventSeed();
  await profileSeed();
  process.exit(0);
};

seedAll();
