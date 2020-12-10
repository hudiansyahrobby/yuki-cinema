const Ticket = require('../model/ticket');
const User = require('../model/user');
const Schedule = require('../model/schedule');
const midtransClient = require('midtrans-client');

exports.createTicket = async (req, res, next) => {
  const { movie, seatNumber, schedule } = req.body;

  try {
    const ticket = await Ticket.findOne({ movie, seatNumber, schedule });

    if (ticket) return res.status(400).json({ success: false, message: 'Ticket is exist' });

    const newTicket = new Ticket({
      movie,
      seatNumber,
      price: 40000,
      schedule,
      buyer: req.user._id,
    });
    await newTicket.save();

    const scheduleMovie = await Schedule.findOne({ date: schedule });
    // Change seated book to true
    for (let index = 0; index < scheduleMovie.seat.length; index++) {
      if (scheduleMovie.seat[index].number === seatNumber) {
        scheduleMovie.seat[index].booked = true;
        await scheduleMovie.save();
      }
    }

    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        ticket: newTicket._id,
      },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    return res.status(201).json({ success: true, ticket: 'Ticket successfully bought' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getTicket = async (req, res, next) => {
  const page = +req.query.page - 1 || 0;
  const itemPerPage = 8;

  try {
    const tickets = await Ticket.find({ buyer: req.user._id })
      .sort({ createdAt: -1 })
      .skip(page * itemPerPage)
      .limit(itemPerPage)
      .exec();
    if (!tickets) {
      return res.status(400).json({ success: false, message: 'Tiket Tidak Ada' });
    }

    const totalTickets = await Ticket.countDocuments({ buyer: req.user._id }).exec();
    const totalPage = Math.ceil(totalTickets / itemPerPage);
    return res.status(200).json({
      success: true,
      totalTickets: totalTickets,
      page: page + 1,
      pageSize: itemPerPage,
      totalPage: totalPage,
      ticket: tickets,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getPayment = async (req, res, next) => {
  // Create Snap API instance
  let snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: process.env.SERVER_KEY_MIDTRANS,
  });

  let parameter = {
    transaction_details: {
      order_id: 'order-id-node-' + Math.round(new Date().getTime() / 1000),
      gross_amount: 40000,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: req.user.name,
      email: req.user.email,
      phone: req.user.telephone,
    },
  };
  try {
    const transaction = await snap.createTransaction(parameter);
    return res.status(200).json({
      success: true,
      result: {
        token: transaction.token,
        redirect_url: transaction.redirect_url,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
