const airsoftSeed = require("./airsoftSeed");
const paintballSeed = require("./paintballSeed");
const profileSeed = require("./profileSeed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await airsoftSeed();
  await paintballSeed();
  await profileSeed();
  process.exit(0);
};

seedAll();
