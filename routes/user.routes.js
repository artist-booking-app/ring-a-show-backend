const express = require('express');
const router = express.Router();
const User = require("../models/User.model");


// GET list of users
router.get("/api/users", (req, res, next) => {
    User.find()
    .then((users) => {
        res.status(200).json(users)
    })
    .catch((error) => {
        next(error)
    })
})

// GET specific user
router.get("/api/users/:userId", (req, res, next) => {
    User.findById(req.params.userId)
    .populate("bookingReference")
    .populate("favouritesArtists")
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        next(error)
    })
})

// PUT specific user
router.put("/api/users/:userId", (req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    .then((updatedUser) => {
        res.status(200).json(updatedUser);
      })
      .catch((error) => {
        next(error);
      })
  })

// DELETE specific user
router.delete("/api/users/:userId", (req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
      .then(() => {
        res.status(204).send();
      })
      .catch((error) => {
        next(error);
      })
  })


module.exports = router;