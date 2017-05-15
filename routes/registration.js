const User = require('../models/user').User;
const jwt = require('jsonwebtoken');

exports.post = (req, res, next) => {
    const username = req.body.username;
    const pass = req.body.password;

    console.log(req.body);

    User.findOne({username}, (err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            res.json({flash: 'Такой логин уже существует'});
        } else {
            const token = jwt.sign({name: username, pass: pass}, 'yankee');
            const user = new User({username: username, token: token});
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                res.json({token: token});
            });
        }
    });
    // res.json({token: 'token'});
};