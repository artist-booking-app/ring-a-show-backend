const express = require("express");
const router = express.Router();
const Artist = require("./../models/Artist.model");
const Booking = require("./../models/Booking.model");
const Performance = require("./../models/Performance.model");
const User = require("./../models/User.model");

// GET list of bookings
router.get("/api/bookings", (req, res, next) => {
  Booking.find()
    .then((bookingsArr) => {
      res.status(200).json(bookingsArr);
    })
    .catch((error) => {
      next(error);
    });
});

// CREATE a booking
router.post("/api/bookings", (req, res, next) => {
  Booking.create({
    artistRef: req.body.artistRef,
    performanceRef: req.body.performanceRef,
    userRef: req.body.userRef,
    location: {
      address: req.body.address,
      typeOfLocation: req.body.typeOfLocation,
      indoor: req.body.indoor,
      outdoor: req.body.outdoor,
    },
  })

    .then((createdBooking) => {
      res.status(201).json(createdBooking);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;

module.exports = router;
