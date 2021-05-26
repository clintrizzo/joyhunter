const Airsoft = require("./airsoft");
const Paintball = require("./paintball");
const Profile = require("./profile");
var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || development;
var config = require('/config/config')[env];

if (config.use_env_variable){
  var sequelize = new Sequelize(process.env[config.use_env_variables],)
} else{
  var sequelize = new Sequelize(config.database, config.username, config.passwor, config);
}

Paintball.belongsTo(Profile, {
  foreignKey: 'profile_id',
});


Airsoft.belongsTo(Profile, {
  foreignKey: 'profile_id',
});

Profile.hasMany(Airsoft, {
  foreignKey: 'Profile_id',
});

Profile.hasMany(Paintball, {
  foreignKey: 'Profile_id',
});

module.exports = {
  Airsoft,
  Profile,
  Paintball,
};
