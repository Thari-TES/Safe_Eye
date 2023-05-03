const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/safeEye", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("connection error:", err);
});

db.once("open", () => {
  console.log("connection success!");
});
