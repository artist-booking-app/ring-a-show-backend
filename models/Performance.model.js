const { Schema, model } = require("mongoose");

const performanceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artistRef: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  description: {
    type: String,
    required: true,
  },
  typeOfPerformance: {
    type: [String],
    enum: ["Music", "Improv", "Dance", "Theatre"],
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
});

const Performance = model("Performance", performanceSchema);

module.exports = Performance;
