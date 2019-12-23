const express = require("express");
const bodyParser = require("body-parser");;
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});


app.listen(port, () => {
  console.log("server listening on port :", port);
});
