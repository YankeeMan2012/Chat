const debug = require('debug')('chat');
const app = require('../app').Express;
const io = require('../app').Io;
const config = require('../config');

app.set('port', config.get('port') || 3000);

const server = app.listen(app.get('port'), () => {
    debug('Express server listening on port ' + server.address().port);
});

io.listen(server);
