'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      email: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          isEmail: true
        },
        primaryKey: true
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      salt: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};