const { Model, DataTypes, INTEGER, STRING } = require("sequelize");
const sequelize = require("../config/connection.js");

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    event_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: "profile",
  }
);

Profile.associate = function (models) {
  Profile.hasMany(models.Airsoft, {
    onDelete: "cascade",
  });
};

Profile.associate = function (models) {
  Profile.hasMany(models.Paintball, {
    onDelete: "cascade",
  });
};

module.exports = Profile;
