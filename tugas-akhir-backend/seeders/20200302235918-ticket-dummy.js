"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tickets",
      [
        {
          name_train: "Yokohama Express",
          type_train: 1,
          date_start: "01-01-2001",
          start_station: "Yokohama Station",
          destination_station: "Fuoka Station",
          arrival_time: "08:16:45",
          price: 20000,
          qty: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tickets", null, {});
  }
};
