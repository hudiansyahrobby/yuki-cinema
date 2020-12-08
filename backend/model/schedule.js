const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  movie: {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  seat: [
    {
      number: String,
      booked: Boolean,
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
