// src/app.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');



const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFoundHandler');

const fileRoutes = require('./routes/file.route');

require('./config/db');

dotenv.config();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', profileRoutes);

// Routes
app.use('/files', fileRoutes);

app.use(errorHandler);
app.use(notFoundHandler);


module.exports = app;
