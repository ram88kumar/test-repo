const express = require('express');
const app = express();
const port = 3000;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('<h1>Hello from Ram from Chennai. Date: ' + new Date() + '</h1');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is now running at http://localhost:${port}`);
});
