const express = require('express');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());
connectDB();
module.exports = app;