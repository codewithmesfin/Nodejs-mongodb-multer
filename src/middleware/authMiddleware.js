// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  // Get token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user associated with the decoded token
    const user = await User.findById(decoded.user.id);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid token, authorization denied' });
    }

    // Set the user object in the request for further use
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = authMiddleware;
