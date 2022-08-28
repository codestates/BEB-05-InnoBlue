const express = require("express");
const cors = require("cors");
const indexRouter = require('./routes');
const session = require('express-session');
const controller = require("./controllers/main.controller");
const { sequelize } = require("./models");

const app = express();
const port = 4000;

app.use(
  session({
    secret: 'a1b2',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
    },
  })
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Main Router

app.use('/', indexRouter);

// MYSQL DB 연결

sequelize
  .sync({ force: false }) // 서버 실행마다 테이블을 재생성할지에 대한 여부
  .then(()=> {
    console.log('MYSQL Connected!!');
  })
  .catch((err)=> {
    console.log(err);
  })

//Error Handling
app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

module.exports = controller.init().then(() => {
  app.listen(port, () => {
      console.log(`      🚀 Server is starting on ${port}`);
    }
  )
});
