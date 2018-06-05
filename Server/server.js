const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const publicPath = __dirname;
const routing = require('./routing');

app.get('/', function (req, res) {
    routing.define(req, res);
    //res.sendFile(path.join(publicPath, '/index.html'));
});

app.listen(1337, 'localhost');