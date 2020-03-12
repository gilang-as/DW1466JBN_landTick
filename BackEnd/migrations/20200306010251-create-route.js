"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("routes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "trains",
          key: "id"
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      starting_point: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "stations",
          key: "id"
        }
      },
      destination: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "stations",
          key: "id"
        }
      },
      start_time: {
        type: Sequelize.STRING
      },
      arrived: {
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
    return queryInterface.dropTable("routes");
  }
};
