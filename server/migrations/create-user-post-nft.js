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
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id'
          },
        },
        title: {
          type: Sequelize.STRING
        },
        nickname: {
          type: Sequelize.STRING
        },
        content: {
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
    }).then(function(){
      queryInterface.createTable('NFT', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'User',
            key: 'id'
          },
        },
        tokenId: {
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        tx_hash: {
          type: Sequelize.STRING
        },
        tokenURI: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('NFT');
  }
};