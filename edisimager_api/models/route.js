"use strict";
module.exports = (sequelize, DataTypes) => {
  const route = sequelize.define(
    "route",
    {
      train_id: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      starting_point: DataTypes.INTEGER,
      destination: DataTypes.INTEGER,
      start_time: DataTypes.STRING,
      arrived: DataTypes.STRING
    },
    {}
  );
  route.associate = function(models) {
    route.belongsTo(models.train, {
      foreignKey: "train_id",
      as: "train"
    });
    route.belongsTo(models.station, {
      foreignKey: "starting_point",
      as: "start"
    });
    route.belongsTo(models.station, {
      foreignKey: "destination",
      as: "dest"
    });
  };
  return route;
};
