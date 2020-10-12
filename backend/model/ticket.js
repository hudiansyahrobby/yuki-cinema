const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: 'Movie',
  },
  seatNumber: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  schedule: {
    type: mongoose.Schema.ObjectId,
    ref: 'Schedule',
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
