const mongoClient = require('../../src/db/mongoclient');
const Tester = require('../../src/controllers/tester');
const { ObjectId } = require('mongodb');

const testOneId = ObjectId.generate()
const testOne = {
    _id: testOneId,
    name: 'One'
}

const setupDatabase = async () => {
    let client = await mongoClient.getClient();
    await Tester.deleteMany(client);
    await Tester.save(client, testOne);
}

module.exports = {
    testOneId,
    testOne,
    setupDatabase
}