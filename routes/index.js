const path = require('path');
const jwt = require('jsonwebtoken');


module.exports = (app) => {

    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, '../client/dist/index.html'));
    });

    app.post('/login', require('./login').post);

    app.post('/registration', require('./registration').post);

};
