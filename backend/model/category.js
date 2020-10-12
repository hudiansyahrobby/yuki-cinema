const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  movies: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
});

module.exports = mongoose.model('Category', categorySchema);
