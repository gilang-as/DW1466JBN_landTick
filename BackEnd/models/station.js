'use strict';
module.exports = (sequelize, DataTypes) => {
  const station = sequelize.define('station', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    area: DataTypes.STRING
  }, {});
  station.associate = function(models) {
    // associations can be defined here
  };
  return station;
};