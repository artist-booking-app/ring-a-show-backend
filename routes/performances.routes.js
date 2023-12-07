const express = require('express');
const router = express.Router();
const Artist = require("./../models/Artist.model");
const Booking = require("./../models/Booking.model");
const Performance = require("./../models/Performance.model");
const User = require("./../models/User.model");

// GET list of performances
router.get("/api/performances", (req, res, next) => {
    Performance.find()
    .populate("artistRef")
    .then((performances) => {
        res.status(200).json(performances)
    })
    .catch((error) => {
        next(error)
    })
})

// GET specific performance
router.get("/api/performances/:performanceId", (req, res, next) => {
    Performance.findById(req.params.performanceId)
    .then((performance) => {
        res.status(200).json(performance)
    })
    .catch((error) => {
        next(error)
    })
})

// POST performance
router.post("/api/performances", (req, res, next) => {
    Performance.create({
        title: req.body.title,
        artistRef: req.body.artistRef,
        description: req.body.description,
        typeOfPerformance: req.body.typeOfPerformance,
        fee: req.body.fee,
        requirements: req.body.requirements
    })
    .then((createdPerformance) => {
        res.status(201).json(createdPerformance)
    })
    .catch((error) => {
        next(error)
    })
})

// PUT specific performance
router.put("/api/performances/:performanceId", (req, res, next) => {
    Performance.findByIdAndUpdate(req.params.performanceId, req.body, {new: true})
    .then((updatedPerformance) => {
       res.status(200).json(updatedPerformance) 
    })
    .catch((error) => {
        next(error)
    })
})

// DELETE specific performance
router.delete("/api/performances/:performanceId", (req, res, next) => {
    Performance.findByIdAndDelete(req.params.performanceId)
    .then(() => {
        res.status(204).send()
    })
    .catch((error) => {
        next(error)
    })
})


module.exports = router;