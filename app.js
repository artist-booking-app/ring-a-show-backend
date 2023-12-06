const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

mongoose
  .connect("mongodb://127.0.0.1:27017/ring-a-show-backend")
  .then(x => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to MongoDB", err));

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// User routes
const userRouter = require('./routes/user.routes')
app.use('/', userRouter)

// Artist routes
const artistsRouter = require('./routes/artists.routes')
app.use('/', artistsRouter)

// Performance routes
const performancesRouter = require('./routes/performances.routes')
app.use('/', performancesRouter)

// Bookings routes
const bookingsRouter = require('./routes/bookings.routes')
app.use('/', bookingsRouter)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
