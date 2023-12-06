const express = require('express');
const router = express.Router();
const Artist = require("../models/Artist.model");
const Booking = require("../models/Booking.model");
const Performance = require("../models/Performance.model");
const User = require("../models/User.model");

router.get("/api/users", (req, res, next) => {
    User.find()
    .then((users) => {
        res.status(200).json(users)
    })
    .catch((error) => {
        next(error)
    })
})

router.get("/api/users/:userId", (req, res, next) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        next(error)
    })
})

router.post("/api/users", (req, res, next) => {
    User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
        isArtist: req.body.isArtist
    })
    .then((createdUser) => {
        res.status(201).json(createdUser)
    })
    .catch((error) => {
        next(error)
    })
})


module.exports = router;