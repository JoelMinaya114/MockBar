const express = require('express');
const router = express.Router();
const dataset = require('../utils/readData');

router.get('/:year/:location/:letter/:datapoint', (req, res) => {
  const { year, location, letter, datapoint } = req.params;
  
  const result = dataset.find(
    (item) =>
      item.year === year &&
      item.location === location &&
      item.letter === letter &&
      item.datapoint === datapoint
  );

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

module.exports = router;
