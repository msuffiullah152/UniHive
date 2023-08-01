"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Post, { foreignKey: "userId" }); // Updated
      this.hasMany(models.Message, { foreignKey: "userId" }); // Updated
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      college_level: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      college: DataTypes.STRING,
      major: DataTypes.STRING,
      course_intrest: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "User", // Ensure this matches the actual table name in the database
    }
  );
  return User;
};
