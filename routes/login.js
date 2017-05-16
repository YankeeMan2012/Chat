const User = require('../models/user').User;
const msg = require('../libs/req.messages');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.post = (req, res, next) => {
    const username = req.body.username;
    const pass = req.body.password;

    User.findOne({username: username}, (err, user) => {
        if (err) {
            res.json({success: false, flash: msg.serverError});
            return next(err);
        }
        if (user) {
            const decodePass = jwt.verify(user.token, config.get('secret')).pass;
            if (decodePass === pass) {
                res.json({success: true, token: user.token, flash: msg.logSuccess});
            } else {
                res.json({success: false, flash: msg.incorrectPass});
            }
        } else {
            res.json({success: false, flash: msg.userEmpty});
        }
    });
};