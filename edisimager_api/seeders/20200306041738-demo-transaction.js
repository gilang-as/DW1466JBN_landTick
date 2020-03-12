"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "transactions",
      [
        {
          user_id: 1,
          route_id: 4,
          date: "00-00-0000 00:00:00",
          total: 2,
          price: 400000,
          status: "paid",
          attactement: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("transactions", null, {});
  }
};
