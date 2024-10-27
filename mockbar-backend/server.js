const express = require('express');
const indexRoutes = require('./routes/indexRoutes'); // Make sure the path is correct
const server = express();


// Middleware
server.use(express.json());

// Routes
server.use('/', indexRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

let dataset = [];

fs.createReadStream(path.join(__dirname, '../data.csv'))
  .pipe(csv())
  .on('data', (row) => {
    dataset.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

module.exports = dataset;
