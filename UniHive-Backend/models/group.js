"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    // Updated model name to PascalCase
    static associate(models) {
      // define association here
      this.hasMany(models.Post, { foreignKey: "groupId" }); // Association with Post
      this.hasMany(models.GroupTag, { foreignKey: "groupId" }); // Association with GroupTag
      // Additional associations can be added here as needed
    }
  }
  Group.init(
    {
      groupName: DataTypes.STRING, // Updated to camelCase
      groupDescription: DataTypes.TEXT, // Updated to camelCase
      groupLocation: DataTypes.STRING,
      collegeMajor: DataTypes.STRING, // Updated to camelCase
      groupCollege: DataTypes.STRING,
      // Removed groupToUser and groupToPost as they are likely handled by associations
    },
    {
      sequelize,
      modelName: "Group", // Updated model name to PascalCase
      tableName: "groups", // Specified table name in snake_case
    }
  );
  return Group;
};
