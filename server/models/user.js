'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // NOT NULL 인지 아닌지, false인 경우 값이 필수 (default: true)
      validate: {
        isEmail: true
      }
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eth_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salt: {  // DB 패스워드 암호화 모듈 나중에 작업 예정
      type: DataTypes.STRING
    }
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
    freezeTableName: true
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
  }
  return User;
};