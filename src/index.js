const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);