const User = require('../models/user').User;
const jwt = require('jsonwebtoken');
const config = require('../config');
const msg = require('../libs/req.messages');

exports.post = (req, res, next) => {
    const username = req.body.username;
    const pass = req.body.password;

    User.findOne({username: username}, (err, user) => {
        if (err) {
            res.json({success: false, flash: msg.serverError});
            return next(err);
        }
        if (user) {
            res.json({success: false, flash: msg.loginExist});
        } else {
            const token = jwt.sign({name: username, pass: pass}, config.get('secret'));
            const user = new User({username: username, token: token});
            user.save((err) => {
                if (err) {
                    res.json({success: false, flash: msg.serverError});
                    return next(err);
                }
                res.json({success: true, flash: msg.regSuccess, token: token});
            });
        }
    });
};