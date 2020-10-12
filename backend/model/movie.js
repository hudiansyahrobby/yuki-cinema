const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  category: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
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
});

module.exports = mongoose.model('Movie', movieSchema);
