const { Model, DataTypes, INTEGER, STRING } = require("sequelize");
const sequelize = require("../config/connection.js");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: "event",
  }
);

// Event.associate = function (models) {
//   Event.belongsTo(models.Profile, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });
// };

module.exports = Event;

// let asdfdasf = 'SELECT auth0.id'; query += 'FROM profile INNER JOIN event ON event.id'