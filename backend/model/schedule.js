const { TramOutlined } = require('@material-ui/icons');
const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: mongoose.Schema.ObjectId,
    ref: 'Time',
    required: true,
  },
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: 'Movie',
    required: true,
  },
  seat: [
    {
      number: String,
      booked: Boolean,
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
