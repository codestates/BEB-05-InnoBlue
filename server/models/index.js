const db = require('../db');

module.exports = {
  user: {
    create: async (nickname, password, address, token_amount, eth_amount, created_at) => {
      const query = `INSERT INTO user (nickname, password, address, token_amount, eth_amount, created_at) VALUES (?, ?, ?, ?, ?, ?);`;
      const params = [nickname, password, address, token_amount, eth_amount, created_at];
      return await db.promise().query(query, params);
    }
  },

  server: {
    get: async () => {
      const query = `SELECT * FROM user WHERE nickname='${process.env.SERVER_NICKNAME}'`;
      return await db.promise().query(query);
    }
  }
};
