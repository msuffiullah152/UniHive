"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    // Updated model name
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { as: "Sender", foreignKey: "senderId" }); // Sender association
      this.belongsTo(models.User, { as: "Receiver", foreignKey: "receiverId" }); // Receiver association
    }
  }
  Message.init(
    {
      content: DataTypes.STRING,
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Message", // Updated model name
      tableName: "messages", // Specified table name
    }
  );
  return Message;
};
