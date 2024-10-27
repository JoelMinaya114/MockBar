// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port on which the server will run
const port = 3000;

// Sample hotel data
const hotelData = {
  '2021': {
    'NYC': [
      { name: 'Hotel ABC', price: '$200/night' },
      { name: 'Hotel XYZ', price: '$250/night' },
    ],
    'BOSTON': [
      { name: 'Hotel Boston', price: '$180/night' },
      { name: 'Hotel Charm', price: '$220/night' },
    ],
  },
  // Add data for other years/locations as needed...
};

// Define the endpoint to get hotels for a specific year and location
app.get('/:year/:location/hotels', (req, res) => {
  const { year, location } = req.params;

  if (hotelData[year] && hotelData[year][location]) {
    res.json(hotelData[year][location]);
  } else {
    res.status(404).send('No data available for the specified year or location');
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
