const express = require('express');
const app = express();
const routing = require('./routing');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    routing.define(req, res);
});

app.listen(port, () => {
    console.log(`Server is up! \n and listening on port ${port}`);
});