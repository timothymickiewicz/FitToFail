const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      name: String,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
})

const Workout = mongoose.model('Workouts', workoutSchema)
module.exports = Workout
