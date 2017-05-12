const debug = require('debug')('photos');
const app = require('../app');
const config = require('../config');

app.set('port', config.get('port') || 3000);

const server = app.listen(app.get('port'), () => {
    debug('Express server listening on port ' + server.address().port);
});
