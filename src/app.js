var express = require('express');
const cors = require('cors');
var app = express();

// settings
app.set('port', process.env.PORT || 3001);


// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use('/api/v1/consultants', require('./routes/consultants'));
app.use('/api/v1/appointments', require('./routes/appointments'));
app.use('/api/v1/flowers', require('./routes/flowers'));


module.exports = app;