const User = require('../models/user').User;

var jwt = require('jsonwebtoken');

exports.post = (req, res, next) => {
    const username = req.body.username;
    const pass = req.body.password;
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    // // res.setHeader('Access-Control-Allow-Credentials', true);
    // var token = jwt.sign({ foo: 'bar' }, 'yankee', { algorithm: 'RS256'});

    // console.log(username, pass);

    var token = jwt.sign({name: username, pass: pass}, 'yankee');
    // console.log(token);
    res.json(req.body);
};
