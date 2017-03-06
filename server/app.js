const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan('common'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so that react-router renders the route in the client
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;