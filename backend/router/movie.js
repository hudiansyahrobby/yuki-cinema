const router = require('express').Router();

const movieController = require('../controller/movie');

const { upload } = require('../utils/multerInit');

const uploadFile = upload();

router.post('/movie', uploadFile.single('image'), movieController.createMovie);

router.get('/movie', movieController.getAllMovies);

router.get('/movie/category/:id', movieController.getMovieByCategory);

router.get('/movie/:id', movieController.getMovie);

router.put('/movie/:id', uploadFile.single('image'), movieController.updateMovie);

router.delete('/movie/:id', movieController.deleteMovie);

module.exports = router;
