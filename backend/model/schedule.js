const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Time',
    },
  ],
  movie: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Movie',
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
