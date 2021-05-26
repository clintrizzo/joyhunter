const Airsoft = require("./airsoft");
const Paintball = require("./paintball");
const Profile = require("./profile");
var config = require(__dirname + '/config/config')[env];

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
