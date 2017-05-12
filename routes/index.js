const Photo = require('../models/photo').Photo;
const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res, next) => {
        res.sendfile(path.join(__dirname, '../client/dist/index.html'));
    });

    app.get('/photos', (req, res, next) => {
        Photo.find({}, (err, photos) => {
            if (err) {
                return next(err);
            }
            res.json(photos);
        }).limit(100);
    });

    app.get('/photos/:id', (req, res, next) => {
        Photo.find({'id': req.params.id}, (err, photo) => {
            if (err) {
                return next(err);
            }
            res.json(photo[0]);
        });
    });

    app.get('/albums/:id', (req, res, next) => {
        Photo.find({'albumId': req.params.id}, (err, photos) => {
            if (err) {
                return next(err);
            }
            res.json(photos);
        });
    });

    app.get('*', (req, res, next) => {
        res.sendfile(path.join(__dirname, '../client/dist/index.html'));
    });

};
