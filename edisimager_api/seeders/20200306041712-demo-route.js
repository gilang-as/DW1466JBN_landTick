"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "routes",
      [
        {
          train_id: 1,
          price: 200000,
          starting_point: 1,
          destination: 2,
          start_time: "08:00",
          arrived: "12:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train_id: 1,
          price: 150000,
          starting_point: 2,
          destination: 3,
          start_time: "12:15",
          arrived: "15:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          train_id: 1,
          price: 200000,
          starting_point: 3,
          destination: 4,
          start_time: "15:15",
          arrived: "20:00",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("routes", null, {});
  }
};
