const router = require('express').Router();

const { verifyUser } = require('../middleware/userAuth');

const ticketController = require('../controller/ticket');

router.post('/ticket', verifyUser, ticketController.createTicket);

router.get('/ticket', verifyUser, ticketController.getTicket);

module.exports = router;
