"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          username: "john",
          email: "john@email.com",
          password: "john",
          gender: "Male",
          phone: "+61 980 788",
          address: "Address john",
          level: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Smith",
          username: "smith",
          email: "smith@email.com",
          password: "smith",
          gender: "Male",
          phone: "+61 980 788",
          address: "Address smith",
          level: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};