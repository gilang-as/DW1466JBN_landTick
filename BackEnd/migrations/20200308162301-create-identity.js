"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("identities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "transactions",
          key: "id"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.ENUM("KTP", "PASSPORT", "SIM", "OTHER")
      },
      identity: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("identities");
  }
};
