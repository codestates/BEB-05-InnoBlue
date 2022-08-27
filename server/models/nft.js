'use strict';
module.exports = (sequelize, DataTypes) => {
  const NFT = sequelize.define('NFT', {
    userId: {
      type: DataTypes.INTEGER,
    },
    tokenId: {
        type: DataTypes.INTEGER,
      },
    title: {
    type: DataTypes.STRING,
    },
    tx_hash: {
      type: DataTypes.STRING,
    },
  }, {
    charset: "utf8",
    freezeTableName: true
  });
  NFT.associate = (db) => {
    db.NFT.belongsTo(db.User);
  }
  return NFT;
};