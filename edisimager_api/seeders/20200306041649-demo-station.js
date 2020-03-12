"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Surabaya",
          code: "SBY",
          area: "Surabaya",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Semarang",
          code: "SMG",
          area: "Semarang",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bandung",
          code: "BDG",
          area: "Bandung",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jakarta",
          code: "JKT",
          area: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stations", null, {});
  }
};
