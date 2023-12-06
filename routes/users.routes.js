const express = require('express');
const router = express.Router();
const Artist = require("./../models/Artist.model");
const Booking = require("./../models/Booking.model");
const Performance = require("./../models/Performance.model");
const User = require("./../models/User.model");

router.get("/api/users/:userId", (req, res, next) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((error) => {
        next(error)
    })
})


module.exports = router;