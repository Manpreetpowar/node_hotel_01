const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.DB_URL;


// Connect to MongoDB
mongoose.connect(mongoURL);

// Get the default connection
const db = mongoose.connection;


// Event listeners for connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err)=>{
    console.log('Mongodb connection error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

module.exports = db;