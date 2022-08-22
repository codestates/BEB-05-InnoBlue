//<<<<<<< feature/init-server
//const db = require('../db');
//
//module.exports = {
//  user: {
//    create: async (nickname, password, address, token_amount, eth_amount, created_at) => {
//      const query = `INSERT INTO user (nickname, password, address, token_amount, eth_amount, created_at) VALUES (?, ?, ?, ?, ?, ?);`;
//      const params = [nickname, password, address, token_amount, eth_amount, created_at];
//      return await db.promise().query(query, params);
//    }
//  },
//
//  server: {
//    get: async () => {
//      const query = `SELECT * FROM user WHERE nickname='${process.env.SERVER_NICKNAME}'`;
//     return await db.promise().query(query);
//    }
//  }
//};

const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// new Sequelize를 통해 MYSQL 연결 객체를 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);


// 연결된 객체 나중에 재사용 하기위해 db.sequelize에 넣기
db.sequelize = sequelize;
db.User = User;
db.Post = Post;

module.exports = db;
