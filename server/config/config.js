const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "InnoBlue",
  host: "127.0.0.1",
  dialect: "mysql"
};

const test = {
  username: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "InnoBlue_test",
  host: "127.0.0.1",
  dialect: "mysql"
};

module.exports = { development, test };

