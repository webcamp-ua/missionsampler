const path = require('path');
const express = require('express');

const app = express();
app.use(express.static('build'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/favicon.ico', function (req, res) {
    res.sendFile(path.join(__dirname, './favicon.ico'));
});

app.listen(9080, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://0.0.0.0:9080');
});