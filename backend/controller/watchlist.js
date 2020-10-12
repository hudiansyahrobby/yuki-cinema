const User = require('../model/user');

exports.getWatchlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .populate({
        path: 'watchlist',
        populate: {
          path: 'category',
          model: 'Category',
          select: 'title',
        },
      })
      .select('watchlist')
      .exec();

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    return res.status(200).json({ success: true, watchlist: user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.addWatchlist = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        watchlist: req.params.id,
      },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    return res
      .status(200)
      .json({ success: true, watchlist: 'Movie added successfully to watchlist' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.removeWatchlist = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        watchlist: req.params.id,
      },
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    return res
      .status(200)
      .json({ success: true, watchlist: 'Movie removed successfully to watchlist' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
