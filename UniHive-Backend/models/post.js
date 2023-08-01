"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    // Updated model name
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "userId" }); // Updated association type and foreign key
    }
  }
  Post.init(
    {
      post_content: DataTypes.STRING,
      isSwarm: DataTypes.BOOLEAN,
      swarmLocation: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post", // Updated model name
      tableName: "posts", // Specified table name
    }
  );
  return Post;
};
