const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  artistRef: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  performanceRef: {
    type: Schema.Types.ObjectId,
    ref: "Performance",
  },
  userRef: {
    type: Schema.Types.ObjectId,
    ref: "User",
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