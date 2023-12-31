const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  artistRef: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  artistName: {
    type: String,
    required: true
  },
  performanceRef: {
    type: Schema.Types.ObjectId,
    ref: "Performance",
  },
  performanceName: {
    type: String,
    required: true
  },
  userRef: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    typeOfLocation: {
      type: [String],
      enum: ["Private", "Commercial"],
      required: [true, "Type of location is required."],
    },
    indoor: {
      type: Boolean,
      required: true,
      default: true
    }
  }
});

const Booking = model("Booking", bookingSchema)

module.exports = Booking