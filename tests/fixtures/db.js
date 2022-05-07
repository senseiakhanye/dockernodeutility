const mongoose = require('mongoose');
const Tester = require('../../src/models/tester');

const testOneId = new mongoose.Types.ObjectId;
const testOne = {
    _id: testOneId,
    name: 'One'
}

const setupDatabase = async () => {
    await Tester.deleteMany();
    await new Tester(testOne).save();
}

module.exports = {
    testOneId,
    testOne,
    setupDatabase
}