const router = require('express').Router();

const scheduleController = require('../controller/schedule');

router.post('/schedule', scheduleController.createSchedule);

router.get('/schedule', scheduleController.getAllSchedule);

router.get('/schedule/:date', scheduleController.getScheduleByDate);

router.get('/schedule/show/:id', scheduleController.getScheduleById);

router.delete('/schedule/:id', scheduleController.deleteSchedule);

// router.put('/schedule/movie/:id', scheduleController.addMovieToSchedule);

// router.put('/schedule/:scheduleId/movie/:movieId', scheduleController.removeMovieFromSchedule);

module.exports = router;
