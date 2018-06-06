var express = require('express');
var router = express.Router();
var path = __dirname;

router.get('/', function (req, res) {
    var fileName = path + req.url + 'index.html';
    res.set('Content-Type', 'text/html');
    sendFile(res, fileName);
});

router.get(/\.css$/, function (req, res) {
    var fileName = path + req.url;
    res.set('Content-Type', 'text/css');
    sendFile(res, fileName);
});

router.get(/\.js$/, function (req, res) {
    var fileName = path + req.url;
    res.set('Content-Type', 'application/javascript');
    sendFile(res, fileName);
});

router.get(/\.woff$/, function (req, res) {
    var fileName = path + req.url;
    fileName = fileName.split('?')[0];
    res.set('Content-Type', 'application/font-woff');
    sendFile(res, fileName);
});

router.get(/\.jpg$/, function (req, res) {
    var fileName = path + req.url;
    res.set('Content-Type', 'image/jpg');
    sendFile(res, fileName);
});

function sendFile(res, fileName) {
    res.sendFile(fileName, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
}
module.exports = router;