const Event = require("./event");
const Profile = require("./profile");

Event.belongsTo(Profile, {
  foreignKey: 'profile_id',
});

Profile.hasMany(Event, {
  foreignKey: 'Profile_id',
});


module.exports = {
  Event,
  Profile,
};
