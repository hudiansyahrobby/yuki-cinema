const router = require('express').Router();

const authController = require('../controller/auth');

router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

router.post('/signout', authController.signout);

module.exports = router;
