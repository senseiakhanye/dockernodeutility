const { MongoClient } = require('mongodb');

var client;

const initialiseConnection = async() => {
    console.log('MONGODB CONNECTION INITIALISED!!!');
    let url = process.env.MONGODB_URL;
    url = url.replace('#{MONGODB_USERNAME}', process.env.MONGODB_USERNAME);
    url = url.replace('#{MONGODB_PASSWORD}', process.env.MONGODB_PASSWORD);

    client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await client.connect();
}

const getClient = async () => {
    if (client == undefined) {
        await initialiseConnection();
        return Object.freeze(client);
    }
    return Object.freeze(client);
}

module.exports = {
    initialiseConnection,
    getClient
}