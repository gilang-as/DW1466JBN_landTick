"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      id_ticket: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      total_pice: DataTypes.INTEGER,
      status: DataTypes.ENUM("pending", "approved"),
      attachment: DataTypes.STRING
    },
    {}
  );
  orders.associate = function(models) {
    orders.belongsTo(models.tickets, {
      foreignKey: "id_ticket",
      as: "ticket"
    });
    orders.belongsTo(models.users, {
      foreignKey: "id_user",
      as: "user"
    });
  };
  return orders;
};
