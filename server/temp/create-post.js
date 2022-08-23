// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Post', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       userId: {
//         allowNull: false,
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'User',
//           key: 'id'
//         },
//       },
//       title: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       nickname: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       content: {
//         allowNull: false,
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Post');
//   }
// };