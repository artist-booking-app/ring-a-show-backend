const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  artistName: {
    type: String,
    required: true,
  },
  typeOfPerformance: {
    type: [String],
    enum: ["Music", "Comedy", "Dance", "Theatre", "Magic", "Circus", "Multidisciplinary", "Performance Art"],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  cityLocation: {
    type: String,
    required: true,
  },
  performancesAvailable: {
    type: Number,
    required: true
  },
  about: {
    biography: {
      type: String,
      required: true,
    },
    showreel: {
      type: String,
      required: true,
    },
  },
  imagePath: {
    type: String,
    required: true,
  },
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
