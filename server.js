const express = require('express');
const mongoose = require('mongoose');

const Data = require('./data.js');
const Videos = require('./dbModel.js');


// app configuration
const app = express();
const port = process.env.port || 9000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Header', '*'),
        next();
});

// DB config
const connection_url = 'mongodb+srv://bivektamu:bivek123@cluster0.sxur2.mongodb.net/<tiktok-backend>?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


// api endpoints
// app.get('/', (req, res) => res.status(200).send('hello world'));

// app.get('/posts', (req, res) => res.status(200).send(Data));
app.post('/posts', (req, res) => {

    // add video document to videos collection in mongodb
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data)
        }
    })
});

app.get('/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data)
        }
    })
})


// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
