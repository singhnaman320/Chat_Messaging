module.exports.setupSockets = (io) => {
    io.on('connection', (socket) => {
        console.log('New WebSocket connection');
        
        socket.on('join', (userId) => {
            socket.join(userId);
            console.log(`User ${userId} joined`);
        });

        socket.on('sendMessage', ({ sender, receiver, content }) => {
            io.to(receiver).emit('receiveMessage', { sender, content });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};