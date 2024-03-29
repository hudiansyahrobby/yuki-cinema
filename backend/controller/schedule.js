// import endOfDayfrom 'date-fns/endOfDay'
// import startOfDay from 'date-fns/startOfDay'
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');
const startOfTomorrow = require('date-fns/startOfTomorrow');
const endOfTomorrow = require('date-fns/endOfTomorrow');
const Schedule = require('../model/schedule');

exports.createSchedule = async (req, res, next) => {
  const { date, movie } = req.body;
  console.log('DATE', date);
  const schedule = await Schedule.findOne({ date });
  if (schedule) return res.status(400).json({ success: false, message: 'Schedule has exist' });

  const seat = [];
  for (let index = 0; index < 60; index++) {
    const newSeat = {
      number: index + 1,
      booked: false,
    };
    seat.push(newSeat);
  }
  try {
    const newSchedule = new Schedule({
      date,
      movie,
      seat,
    });
    await newSchedule.save();

    return res
      .status(201)
      .json({ success: true, message: 'New schedule successfully created', schedule: newSchedule });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllSchedule = async (req, res, next) => {
  try {
    const schedules = await Schedule.find({});
    if (!schedules) return res.status(400).json({ success: false, message: 'Schedule is empty' });
    console.log(schedules);
    return res.status(200).json({ success: true, schedules });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getScheduleByDate = async (req, res, next) => {
  const { date } = req.params;
  if (!date) {
    return res.status(400).json({ success: false, message: 'Schedule not found' });
  }

  try {
    let schedule;
    if (date === 'today') {
      schedule = await Schedule.find({
        date: {
          $gte: startOfDay(new Date()),
          $lte: endOfDay(new Date()),
        },
      });
    }

    if (date === 'tomorrow') {
      schedule = await Schedule.find({
        date: {
          $gte: startOfTomorrow(new Date()),
          $lte: endOfTomorrow(new Date()),
        },
      });
    }

    if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

    return res.status(200).json({ success: true, schedule });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getScheduleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id)
      .populate('time', 'hour -_id')
      .populate({
        path: 'movie',
        populate: {
          path: 'category',
          model: 'Category',
          select: 'title',
        },
      })
      .exec();
    if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

    return res.status(200).json({ success: true, schedule });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteSchedule = async (req, res, next) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findByIdAndDelete(id);

    if (!schedule)
      return res
        .status(400)
        .json({ success: false, message: "Can't delete schedule that doesn't exist" });

    return res.status(200).json({ success: true, message: 'Schedule successfully deleted' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// exports.addMovieToSchedule = async (req, res, next) => {
//   const { id } = req.params;

//   const newMovie = {
//     movie: req.body.movieId,
//   };

//   try {
//     const schedule = await Schedule.findByIdAndUpdate(id, {
//       $push: newMovie,
//     });

//     if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

//     return res.status(200).json({ success: true, message: 'Schedule successfully updated' });
//   } catch (error) {
//     return res.status(400).json({ success: false, message: error.message });
//   }
// };

// exports.removeMovieFromSchedule = async (req, res, next) => {
//   const { scheduleId, movieId } = req.params;
//   try {
//     const schedule = await Schedule.findByIdAndUpdate(scheduleId, {
//       $pull: {
//         movie: movieId,
//       },
//     });

//     console.log(schedule);

//     if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

//     return res.status(200).json({ success: true, message: 'Schedule successfully updated' });
//   } catch (error) {
//     return res.status(400).json({ success: false, message: error.message });
//   }
// };
