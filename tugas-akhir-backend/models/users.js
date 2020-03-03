"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      level: DataTypes.ENUM("user", "admin")
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
