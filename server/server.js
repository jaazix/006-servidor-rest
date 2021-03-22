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

app.get('/usuario', function(req, res) {
    res.json({
        ok: 200,
        mensaje: 'usuario consultado con exito'
    });
});

app.post('/usuario', function(req, res) {

    let nombre = req.body.nombre;
    let body = req.body;

    if (nombre === undefined) {
        res.status(400).json({
            ok: 400,
            mensaje: 'ingresar un nombre',

        });
    } else {

        res.json({
            ok: 200,
            mensaje: 'usuario insertado con exito',
            usuario: body
        });
    }
});

app.put('/usuario/:id/:nombre', function(req, res) {
    let id = req.params.id;
    let nombre = req.params.nombre;

    res.json({
        ok: 200,
        mensaje: 'usuario actualisado con exito',
        id: id,
        nombre: nombre
    });
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        ok: 200,
        mensaje: 'usuario eliminado exitosamente',
        id: id
    });
});

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