// external imports
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// internal imports
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");

const app = express();
dotenv.config();

// database connect
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

//   request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// cookie parsers
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.get("/", loginRouter);

// 404 not found error handling
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// app listener
app.listen(process.env.PORT, () =>
  console.log(`app listening to port ${process.env.PORT}`)
);
