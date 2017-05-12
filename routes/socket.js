const io = require('../app').Io;

module.exports = (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', {type:'new-message', text: message});
    });
};

