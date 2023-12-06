const express = require('express');
const router = express.Router();
const Artist = require("./../models/Artist.model");
const Booking = require("./../models/Booking.model");
const Performance = require("./../models/Performance.model");
const User = require("./../models/User.model");

// GET list of artists
router.get("/api/artists", (req, res, next) => {
    Artist.find()
    .then((artists) => {
        res.status(200).json(artists)
    })
    .catch((error) => {
        next(error)
    })
})

// GET specific artist
router.get("/api/artists/:artistId", (req, res, next) => {
    Artist.findById(req.params.artistId)
    .then((artist) => {
        res.status(200).json(artist)
    })
    .catch((error) => {
        next(error)
    })
})

// POST specific artist
router.post("/api/artists", (req, res, next) => {
    Artist.create({
        artistName: req.body.artistName, 
        typeOfPerformance: req.body.typeOfPerformance,
        genre: req.body.genre,
        cityLocation: req.body.cityLocation,
        performancesAvailable: req.body.performancesAvailable,
        about: {
            biography: req.body.about.biography,
            showreel: req.body.about.showreel
         },
        imagePath: req.body.imagePath
    })
    .then((createdArtist) => {
        res.status(201).json(createdArtist)
    })
    .catch((error) => {
        next(error)
    })
})

module.exports = router;