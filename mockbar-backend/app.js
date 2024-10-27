const express = require('express');
const indexRoutes = require('./routes/indexRoutes'); // Make sure the path is correct
const app = express();


// Middleware
app.use(express.json());

// Routes
app.use('/', indexRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const fs = require('fs');
const path = require('path');

module.exports = dataset;
