require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = process.env.MONGO_URL;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/projects', (req, res) => {
  MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {  
    if (err) throw err;
    else{
       // Get the documents collection
      const db = client.db(process.env.MONGO_DB);
      const col = db.collection(process.env.MONGO_COLLECTION);
      col.find({}).toArray(function(err, docs) {
        res.json(docs);
        client.close();
      });
    }
  })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);