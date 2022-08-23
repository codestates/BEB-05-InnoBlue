'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    p_count: {
      type: DataTypes.INTEGER,
    },
    day: {
      type: DataTypes.DATE,
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