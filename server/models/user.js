'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL 인지 아닌지, false인 경우 값이 필수 (default: true)
      validate: {
        isEmail: true
      },
      primaryKey: true  // 기본키인지 아닌지 (default: false)
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    }
  }, {
    charset: "utf8",
    collate: "utf8_general_ci" // 한글 저장
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
  }
  return User;
};