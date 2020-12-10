const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  movie: {
    type: String,
    required: true,
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
    type: Date,
    requirement: true,
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
