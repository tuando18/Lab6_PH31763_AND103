const mongoose = require('mongoose');

const local = "mongodb+srv://tuaansdo18:tuandz123@cluster0.unhddxp.mongodb.net/Lab5";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
