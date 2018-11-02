const express = require('express');
const bodyParser = require('body-parser')
// set up express app
const app = express();


app.use(bodyParser.json());

app.use('/api',require('./routes/api'));