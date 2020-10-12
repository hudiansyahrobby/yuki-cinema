const router = require('express').Router();

const timeController = require('../controller/time');

router.post('/time', timeController.createTime);

router.get('/time', timeController.getTime);

router.put('/time/:id', timeController.updateTime);

router.delete('/time/:id', timeController.deleteTime);

module.exports = router;
