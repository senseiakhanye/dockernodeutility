const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Tester = mongoose.model('Tester', testSchema);

module.exports = Tester;