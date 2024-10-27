const express = require('express');
const router = express.Router();

// Endpoint for year-related data
router.get('/:year/:location/:letter/:datapoint', (req, res) => {
  const { year, location, letter, datapoint } = req.params;
  
  // Sample response (replace with actual data fetching logic)
  res.json({
    message: `Data for year: ${year}, location: ${location}, letter: ${letter}, datapoint: ${datapoint}`
  });
});

module.exports = router;
