const Movie = require('../model/movie');

exports.createMovie = async (req, res, next) => {
  const { title, category, rating, overview } = req.body;

  if (title) {
    const loweredCaseTitle = title.toLowerCase();

    const movie = await Movie.findOne({ title: loweredCaseTitle });

    if (movie) {
      return res.status(400).json({ success: false, message: 'Movie already exist' });
    }

    try {
      const newMovie = new Movie({
        title: loweredCaseTitle,
        category,
        rating,
        overview,
        image: req.file.filename,
      });

      await newMovie.save();
      return res
        .status(200)
        .json({ success: true, message: 'Movie successfully created', movie: newMovie });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  } else {
    return res.status(400).json({ success: false, message: 'Title are required' });
  }
};

exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({}).populate('category', 'title').exec();
    return res.status(200).json({ success: true, movies });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getMovie = async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id).populate('category', 'title -_id').exec();
    if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' });

    return res.status(200).json({ success: false, movie: movie });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getMovieByCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.find({ category: { _id: id } });
    console.log(movie);
    if (!movie) return res.status(400).json({ success: false, message: 'Movie not found' });

    return res.status(200).json({ success: true, movie });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { title, category, rating, overview } = req.body;

  if (title) {
    const loweredCaseTitle = title.toLowerCase();

    const updatedMovie = {
      title: loweredCaseTitle,
      category,
      rating,
      overview,
      image: req.file.filename,
    };

    try {
      const movie = await Movie.findByIdAndUpdate(id, updatedMovie);

      if (!movie)
        return res
          .status(400)
          .json({ success: false, message: "Can't update movie that doesn't exist" });

      return res.status(200).json({ success: true, message: 'Movie successfully updated' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  } else {
    return res.status(400).json({ success: false, message: 'Title are required' });
  }
};

exports.deleteMovie = async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie)
      return res
        .status(400)
        .json({ success: false, message: "Can't delete movie that doesn't exist" });

    return res.status(200).json({ success: true, message: 'Movie Successfully deleted' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
