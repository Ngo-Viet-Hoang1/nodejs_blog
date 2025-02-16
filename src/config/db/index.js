const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/learn_nodejs_f8')
        console.log('Connect success');
        
    } catch (error) {
        console.log('Connect failed');
    }
}

module.exports = { connect }
