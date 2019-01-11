const express = require("express");
const cartRouter = express.Router();
const User = require("../models/user");

cartRouter.put("/add/:sku", (req, res, next) => {
  const quantity = req.body.quantity;
  const paramsSku = req.params.sku;
  const skuArr = [];
  for (let i = 0; i < quantity; i++) {
    skuArr.push(paramsSku);
  }
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { cart: { $each: skuArr } } },
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(user);
    }
  );
});

cartRouter.put("/remove/:sku", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $pullAll: { cart: [req.params.sku] } },
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(user);
    }
  );
});

module.exports = cartRouter;