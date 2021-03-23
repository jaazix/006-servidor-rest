const express = require('express');
const app = express();



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

module.exports = app;