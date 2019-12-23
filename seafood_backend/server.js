const express = require("express");
const bodyParser = require("body-parser");;
const {sequelize} = require("./config/database")
const passport = require('passport')
const app = express();
const port = 3001;
app.use(bodyParser.json({limit: '2MB'}));
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/passport')(passport)
app.use(passport.initialize());
//passport config

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

app.use("/api/user", require("./route/user"))
app.use("/api/address", require("./route/address"))
app.use("/api/product", require("./route/product"))

app.listen(port, () => {
  console.log("server listening on port :", port);
});
