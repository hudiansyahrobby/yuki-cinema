const Ticket = require('../model/ticket');
const User = require('../model/user');

exports.createTicket = async (req, res, next) => {
  const { movie, seatNumber, price, schedule } = req.body;

  try {
    const ticket = await Ticket.findOne({ movie, seatNumber, schedule });

    if (ticket) return res.status(400).json({ success: false, message: 'Ticket is exist' });

    const newTicket = new Ticket({
      movie,
      seatNumber,
      price,
      schedule,
      buyer: req.user._id,
    });

    await newTicket.save();

    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        ticket: newTicket._id,
      },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    return res.status(201).json({ success: true, watchlist: 'Ticket successfully bought' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.find({ buyer: req.user._id });
    if (!ticket) return res.status(400).json({ success: false, message: 'Ticket not found' });

    return res.status(200).json({ success: true, ticket });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
