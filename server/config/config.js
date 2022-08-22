const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "InnoBlue",
  host: "127.0.0.1",
  dialect: "mysql"
};

const test = {
  username: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "InnoBlue_test",
  host: "127.0.0.1",
  dialect: "mysql"
};

//const config = {
//  development: {
//    host: 'localhost',
//    user: 'root',
//    password: process.env.MYSQL_ROOT_PASSWORD,
//    database: 'innoblue'
//  }
//};

module.exports = config;

module.exports = { development, test };

