'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
    freezeTableName: true
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
  }
  return Post;
};