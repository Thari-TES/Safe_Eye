require("./db.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

var AboutUsRoute = require("./routes/AboutUsController");

var app = express();
app.use(bodyParser.json());
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  })
);
app.listen(4002, () => console.log("Server started at : 4000"));

app.use("/AboutUs", AboutUsRoute);
