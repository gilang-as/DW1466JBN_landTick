"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trains",
      [
        {
          name: "Surajaya",
          category: "Business",
          seats: 75,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Surajaya",
          category: "Executive",
          seats: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Semarjaya",
          category: "Executive",
          seats: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Semarjaya",
          category: "Economy",
          seats: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Badujaya",
          category: "Executive",
          seats: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Badujaya",
          category: "Economy",
          seats: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jakajaya",
          category: "Executive",
          seats: 50,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jakajaya",
          category: "Economy",
          seats: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trains", null, {});
  }
};
