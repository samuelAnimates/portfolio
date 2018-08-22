const express = require('express');
const path = require('path');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = '';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/projects', (req, res) => {
  const count = 3;

  // Generate some projects
  const projects = ["aaaa","bbbbb", "ccccc"]

  // Return them as json
  res.json(projects);

  console.log(`Sent ${count} projects`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);