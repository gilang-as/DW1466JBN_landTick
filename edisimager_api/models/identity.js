"use strict";
module.exports = (sequelize, DataTypes) => {
  const identity = sequelize.define(
    "identity",
    {
      transaction_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      category: DataTypes.ENUM("KTP", "PASSPORT", "SIM", "OTHER"),
      identity: DataTypes.STRING
    },
    {}
  );
  identity.associate = function(models) {
    identity.belongsTo(models.transaction, {
      foreignKey: "transaction_id",
      as: " "
    });
  };
  return identity;
};
