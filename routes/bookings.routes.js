const express = require("express");
const router = express.Router();
const Artist = require("./../models/Artist.model");
const Booking = require("./../models/Booking.model");
const Performance = require("./../models/Performance.model");
const User = require("./../models/User.model");

const { isAuthenticated } = require("../middleware/jwt.middleware");
// GET list of bookings
router.get("/api/bookings", (req, res, next) => {
  Booking.find()
  .populate("userRef")
  .populate("performanceRef")
  .populate("artistRef")
    .then((bookingsArr) => {
      console.log(bookingsArr)
      res.status(200).json(bookingsArr);
    })
    .catch((error) => {
      next(error);
    });
});

//GET one booking
router.get("/api/bookings/:bookingId", (req, res, next) => {
  const bookingId = req.params.bookingId;

  // Now you can use the bookingId to find the specific booking
  Booking.findById(bookingId)
    .populate("userRef")
    .populate("performanceRef")
    .populate("artistRef")
    .then((booking) => {
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res.status(200).json(booking);
    })
    .catch((error) => {
      next(error);
    });
});


// POST a booking
router.post("/api/bookings", (req, res, next) => {
  Booking.create({
    artistRef: req.body.artistRef,
    artistName: req.body.artistName,
    performanceRef: req.body.performanceRef,
    performanceName: req.body.performanceName,
    userRef: req.body.userRef,
    date: req.body.date,
    location: {
      address: req.body.location.address,
      typeOfLocation: req.body.location.typeOfLocation,
      indoor: req.body.location.indoor,
      outdoor: req.body.location.outdoor,
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
