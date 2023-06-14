const express = require("express");

const db = require("./data/database");

const todoRoutes = require("./routes/todo-routes");

const app = express();
const enableCors = require("./middlewares/cors");



// it should be used by express for every request
app.use(enableCors);
app.use(express.json());

app.use("/todos", todoRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Connecting to the database failed!");
  });
