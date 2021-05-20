const { Model, DataTypes, INTEGER, STRING } = require("sequelize");
const sequelize = require("../config/connection.js");


class Paintball extends Model {}

Paintball.init(
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
      rule1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rule2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: "paintball",
  }
);

Paintball.associate = function (models) {
  Paintball.belongsTo(models.Profile, {
    foreignKey: {
      allowNull: false,
    },
  });
};

module.exports = Paintball;