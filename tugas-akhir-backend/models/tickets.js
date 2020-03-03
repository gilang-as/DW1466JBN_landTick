"use strict";
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define(
    "tickets",
    {
      name_train: DataTypes.STRING,
      type_train: DataTypes.INTEGER,
      date_start: DataTypes.DATE,
      start_station: DataTypes.STRING,
      destination_station: DataTypes.STRING,
      arrival_time: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  tickets.associate = function(models) {
    // associations can be defined here
  };
  return tickets;
};
