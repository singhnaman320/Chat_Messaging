require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const net = require('net');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const { connectDB } = require('./config/db');
const { setupSockets } = require('./sockets/socketHandler');
const { authenticateToken } = require('./middleware/authMiddleware');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/messages', authenticateToken, messageRoutes);

// Socket.IO for real-time communication
setupSockets(io);

// TCP Server for direct P2P connection
const tcpServer = net.createServer(socket => {
    console.log('TCP Client connected');
    socket.on('data', data => {
        console.log('Received:', data.toString());
    });
    socket.on('end', () => {
        console.log('TCP Client disconnected');
    });
});

tcpServer.listen(process.env.TCP_PORT, () => console.log(`TCP Server running on port ${process.env.TCP_PORT}`));

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));