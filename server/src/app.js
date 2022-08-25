const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
// app.use('/api', );

module.exports = app;