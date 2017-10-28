const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const express = require('express');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports = app;
