"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Joko Suprato",
          username: "joko",
          email: "joko@mail.com",
          password: "joko",
          gender: "Male",
          phone: "064 656 656 656",
          address: "Alamat Joko",
          level: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lalapo",
          username: "lalapo",
          email: "lalapo@mail.com",
          password: "lalapo",
          gender: "Female",
          phone: "064 656 656 656",
          address: "Alamat Lalapo",
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
