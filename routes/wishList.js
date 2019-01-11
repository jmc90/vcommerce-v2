const express = require("express");
const wishListRouter = express.Router();
const User = require("../models/user");

wishListRouter.put("/add/:sku", (req, res, next) => {
  const quantity = req.body.quantity;
  const paramsSku = req.params.sku;
  const skuArr = [];
  for (let i = 0; i < quantity; i++) {
    skuArr.push(paramsSku);
  }
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { wishList: { $each: skuArr } } },
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

wishListRouter.put("/remove/:sku", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $pullAll: { wishList: [req.params.sku] } },
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

wishListRouter.put("/tocart/:sku", (req, res, next) => {
  const quantity = req.body.quantity;
  const paramsSku = req.params.sku;
  const skuArr = [];
  for (let i = 0; i < quantity; i++) {
    skuArr.push(paramsSku);
  }
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $pullAll: { wishList: [req.params.sku] },
      $push: { cart: { $each: skuArr } }
    },
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

module.exports = wishListRouter;
