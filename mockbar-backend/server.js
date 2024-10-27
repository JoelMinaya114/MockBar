const express = require('express');
const server = express();
const indexRoutes = require('./routes/index');

// Middleware
server.use(express.json());

// Routes
server.use('/', indexRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
