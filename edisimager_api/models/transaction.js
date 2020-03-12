"use strict";
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      user_id: DataTypes.INTEGER,
      route_id: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
      total: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.ENUM("unpaid", "pending", "paid"),
      attactement: DataTypes.STRING
    },
    {}
  );
  transaction.associate = function(models) {
    transaction.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "user"
    });
    transaction.belongsTo(models.route, {
      foreignKey: "route_id",
      as: "route"
    });
    transaction.hasMany(models.identity, {
      foreignKey: "transaction_id",
      as: "identity"
    });
  };
  return transaction;
};
