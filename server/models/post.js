'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    postId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    collate: "utf8_general_ci" // 한글 저장
  });
  Post.associate = (db) => {
    db.User.belongsTo(db.User);
  }
  return Post;
};