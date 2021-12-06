const express = require("express");
const dotEnv = require("dotenv");
const cookieParser = require("cookie-parser");
const xss = require("xss-clean");
const connectDB = require("./config/db");
const cors = require("cors");

// Load ENV vars
dotEnv.config({ path: "./config/config.env" });

const app = express();

// DB connection
connectDB();

// Body Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Sanitize data
app.use(mongoSanitize());

// Cors Support
app.use(cors());

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);

// Handled unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
