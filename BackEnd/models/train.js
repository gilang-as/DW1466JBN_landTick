"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      name: DataTypes.STRING,
      category: DataTypes.ENUM("Executive", "Business", "Economy"),
      seats: DataTypes.INTEGER
    },
    {}
  );
  train.associate = function(models) {
    // associations can be defined here
  };
  return train;
};
