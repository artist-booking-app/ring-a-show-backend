const express = require('express');
const router = express.Router();
const Artist = require("./../models/Artist.model");

// GET list of artists
router.get("/api/artists", (req, res, next) => {
    Artist.find()
    .populate("performancesAvailable")
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
    .populate("performancesAvailable")
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

// PUT specific artist
router.put("/api/artists/:artistId", (req, res, next) => {
    Artist.findByIdAndUpdate(req.params.artistId, req.body, {new: true})
    .then((updatedArtist) => {
        res.status(200).json(updatedArtist)
    })
    .catch((error) => {
        next(error)
    })
})

// DELETE specific artist
router.delete("/api/artists/:artistId", (req, res, next) => {
    Artist.findByIdAndDelete(req.params.artistId)
    .then(() => {
        res.status(204).send()
    })
    .catch((error) => {
        next(error)
    })
})

module.exports = router;