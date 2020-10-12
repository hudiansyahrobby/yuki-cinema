const mongoose = require('mongoose');

const timeSchema = mongoose.Schema({
  hour: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Time', timeSchema);
