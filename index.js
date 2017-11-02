var express = require('express');
var bodyParser = require('body-parser');
var translate = require('./translate');
var synonym = require('./synonym');

var app = express();

app.use(bodyParser.json());

app.post('/gobble', (req, res) => {
    translate(req.body.hear, (result) => {
        res.send({
            hear: req.body.hear,
            say: result,
            explanation: 'Translate then translate again...'
        });
    });
});

app.post('/synonymise', (req, res) => {
    synonym(req.body.hear, (result) => {
        res.send({
            hear: req.body.hear,
            say: result,
            explanation: 'Replace each word with a synonym'
        });
    });
});

app.post('/hpstr', (req, res) => {
    res.send({
        hear: req.body.hear,
        say: req.body.hear,
        explanation: 'Hipster replacement'
    });
});

app.listen(3000, () => {
    console.log('Listening');
});