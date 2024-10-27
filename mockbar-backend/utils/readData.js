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
