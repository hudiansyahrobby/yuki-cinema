const Schedule = require('../model/schedule');

exports.createSchedule = async (req, res, next) => {
  const { date, time, movie } = req.body;

  const schedule = await Schedule.findOne({ date, time });
  if (schedule) return res.status(400).json({ success: false, message: 'Schedule has exist' });

  try {
    const newSchedule = new Schedule({
      date,
      time,
      movie,
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
    const schedule = await Schedule.find({})
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
    if (!schedule) return res.status(400).json({ success: false, message: 'Schedule is empty' });

    return res.status(400).json({ success: true, schedule });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSchedule = async (req, res, next) => {
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

    return res.status(400).json({ success: true, schedule });
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

    return res.status(400).json({ success: true, message: 'Schedule successfully deleted' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.addMovieToSchedule = async (req, res, next) => {
  const { id } = req.params;

  const newMovie = {
    movie: req.body.movieId,
  };

  try {
    const schedule = await Schedule.findByIdAndUpdate(id, {
      $push: newMovie,
    });

    if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

    return res.status(200).json({ success: true, message: 'Schedule successfully updated' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.removeMovieFromSchedule = async (req, res, next) => {
  const { scheduleId, movieId } = req.params;
  try {
    const schedule = await Schedule.findByIdAndUpdate(scheduleId, {
      $pull: {
        movie: movieId,
      },
    });

    console.log(schedule);

    if (!schedule) return res.status(400).json({ success: false, message: 'Schedule not found' });

    return res.status(200).json({ success: true, message: 'Schedule successfully updated' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
