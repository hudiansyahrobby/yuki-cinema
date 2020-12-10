const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.verifyUser = async function (req, res, next) {
  if (req.headers.authorization) {
    const bearerToken = req.headers.authorization.split(' ');
    let accessToken = bearerToken[1];
    if (!accessToken) {
      return res.status(401).json({ success: false, message: 'Unauthorized, Access Denied' });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      console.log('DECODED TOKEN', decodedToken);
    } catch (error) {
      return res.json({ success: false, message: 'Invalid Token' });
    }
    const user = await User.findOne({ _id: decodedToken.id }).select('-password');
    console.log(user);
    req.user = user;
    next();
  } else {
    console.log('kampret');
    return res.status(401).json({ success: false, message: 'Unauthorized, Access Denied' });
  }
};

exports.verifyAdmin = async function (req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(401).json({ success: false, message: 'Unauthorized, Access Denied' });
  }
  next();
};
