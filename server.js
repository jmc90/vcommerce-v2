const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000;
const path = require("path")

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use(express.static(path.join(__dirname, "client", "build")))

//Routes
app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/wishlist", require("./routes/wishList"));
app.use("/api/user", require("./routes/user"));

// Mongoose Connect
mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost:27017/vcommerce",
  { useNewUrlParser: true },
  () => {
    console.log("You are connected to the Database.");
  }
);

// Global server error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}.`);
});
