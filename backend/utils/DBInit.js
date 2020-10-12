const mongoose = require('mongoose');
// const User = require('../model/user');
// const Ticket = require('../model/ticket');
require('dotenv').config();

exports.DBInit = () =>
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => {
      // Ticket.update({}, { buyer: '5f81f2b7b2d698131c6c8d1a' }, { multi: true }, function (
      //   err,
      //   raw,
      // ) {
      //   console.log('The raw response from Mongo was ', raw);
      // });
      console.log('connected to MONGODB');
    },
  );
