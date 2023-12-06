const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  artistName: {
    type: String,
    required: true,
  },
  typeOfPerformance: {
    type: [String],
    enum: ["Music", "Improv", "Dance", "Theatre"],
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Performance",
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
