const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const favicon = require('static-favicon');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(express.static(path.join(__dirname, '/client/dist')));

require('./routes')(app);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use((err, req, res, next) => {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

io.on('connection', (socket) => {
    require('./routes/socket')(socket);
});

exports.Io = io;
exports.Express = app;