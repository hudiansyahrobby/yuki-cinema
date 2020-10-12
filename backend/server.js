const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { DBInit } = require('./utils/DBInit');
const authRoute = require('./router/auth');
const categoryRoute = require('./router/category');
const movieRoute = require('./router/movie');
const scheduleRoute = require('./router/schedule');
const timeRoute = require('./router/time');
const watchlistRoute = require('./router/watchlist');
const ticketRoute = require('./router/ticket');
const path = require('path');

dotenv.config();

const app = express();
DBInit();
app.use(cors());

app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api', authRoute);
app.use('/api', categoryRoute);
app.use('/api', movieRoute);
app.use('/api', scheduleRoute);
app.use('/api', timeRoute);
app.use('/api', watchlistRoute);
app.use('/api', ticketRoute);

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
