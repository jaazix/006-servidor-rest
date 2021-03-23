require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<h1>bienvenido al server</h1>');
});

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/bd_cafeteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => { //sql 3606
    if (err) throw err;
    console.log('bd en linea');
});

app.listen(process.env.PORT, () => {
    console.log('servidor en linea en el puerto:', process.env.PORT);
});