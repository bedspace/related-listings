const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/index');

const app = express();
const PORT = 3001;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/rooms/related-listings', (req, res) => {
  let queryString = "SELECT * FROM listings";
  db.query(queryString, (err, rows, fields) => {
    res.json(rows);
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});