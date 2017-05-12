const mongoose = require('./libs/mongoose');
const rp = require('request-promise');
const config = require('./config');
const Photo = require('./models/photo').Photo;

const options = {
    uri: config.get('photos-api'),
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

mongoose.connection.on('open', () => {
    const db = mongoose.connection.db;
    db.dropDatabase((err) => {
        if (err) {
            throw err;
        }
        console.log('Base Dropped!');
        rp(options)
            .then((data) => {
                Photo.create(data, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Base Created!');
                    mongoose.disconnect();
                });
            })
            .catch((err) => {
                if (err) {
                    throw err;
                }
            });
    });
});
