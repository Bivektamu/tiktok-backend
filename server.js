const express = require('express');
import mongoose from 'mongoose';

const app = express();
const port = 9000;

app.get('/', (req, res) => res.status(200).send('hello world'));

app.listen(port, () => console.log(`listening on localhost:${port}`));
