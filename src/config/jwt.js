// src/config/jwt.js
const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    user: {
      id: user.id,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

module.exports = generateToken;
