'use strict';
const path = require('path');
const PORT = 3337;

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use("/", express.static(path.join(__dirname, '/')));
app.use("/assets", express.static(path.join(__dirname, '/assets')));

app.listen(PORT);
console.log('listening on port ' + PORT);