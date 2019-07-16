const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
});

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}!`);
});

app.listen(3333);