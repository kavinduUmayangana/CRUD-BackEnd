const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const port = 3001;
const host = 'localhost';
const url = 'mongodb+srv://new_user_1:1234@cluster0.cibao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(cors());
app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error:', error);
    }
};
connect();

app.use('/api', router);

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api',router);