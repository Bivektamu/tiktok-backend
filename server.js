const express = require('express');
const mongoose = require('mongoose');
const data = require('./data');

// import Data from './data';

// app configuration
const app = express();
const port = 9000;

// middleware

// DB config


// api endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
