const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  artistRef: {
    types: Schema.Types.ObjectId,
    ref: "Artist",
  },
  performanceRef: {
    types: Schema.Types.ObjectId,
    ref: "Performance",
  },
  userRef: {
    types: Schema.Types.ObjectId,
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
    },
    outdoor: {
      type: Boolean,
      required: true,
      default: false
    }
  }
});

const Booking = model("Booking", bookingSchema)

module.exports = Booking