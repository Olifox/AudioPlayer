const fs = require('fs');
var userCount=0;

function getPage(path, req, res) {
    if (path == 'favicon.ico') {
        let readStream = fs.createReadStream(prePath + path);
        readStream.pipe(res);
        return;
    } else {
        if (/\./.test(path)) {
            if (/\.css$/gi.test(path)) {
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
            }
            else if (/\.js$/gi.test(path)) {
                res.writeHead(200, {
                    'Content-Type': 'application/javascript'
                });
            }
            else if (/\.jpg$/gi.test(path)) {
                res.writeHead(200, {
                    'Content-Type': 'image/jpg'
                });
            }
            let readStream = fs.createReadStream(path);
            readStream.pipe(res);
            return;
        } else
            fs.readFile(path + 'index.html', 'utf-8', (err, html) => {
                if (err) {
                    let nopath = prePath + '/nopage/404.html';
                    fs.readFile(nopath, (err, html) => {
                        if (!err) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.end(html);
                        }
                    });
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(html);
                }
            });
    }
}

const define = async function (req, res) {
    userCount++;
    prePath = __dirname;
    path = req.url;
    let filePath = prePath + path;
    getPage(filePath, req, res);
}
exports.define = define;