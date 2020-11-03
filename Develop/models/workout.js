const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
  {
    exerciseType: STRING,
    name: STRING,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  },
]}, {
  toJSON: {
    virtuals: true,
  }
})

const Workout = mongoose.model ("Workout", workoutSchema);
module.exports = Workout

