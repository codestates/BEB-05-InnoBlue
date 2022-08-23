'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          isEmail: true
        }
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      eth_amount: {
        type: Sequelize.INTEGER,
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
    }).then(function(){
      queryInterface.createTable('Post', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id'
          },
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING
        },
        nickname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        content: {
          allowNull: false,
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
    await queryInterface.dropTable('Post');
  }
};