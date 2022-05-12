const { ObjectId } = require('mongodb')

const COLLECTION = 'tester';

const verifyModel = (model) => {
    return model;
}

const save = async(client, tester) => {
    try {
        const result = await client.db('mytester').collection(COLLECTION).insertOne(tester);
        return result;
    } catch (error) {
        console.error('Unable to save tester ', error);
        throw new Error(error);
    }
}

const deleteMany = async(client) => {
    try {
        const result = await client.db('mytester').collection(COLLECTION).deleteMany();
        return result;
    } catch (error) {
        console.error('Unable to delete all entries ', error);
        throw new Error(error);
    }
    
}

const find = async(client) => {
    try {
        const results = await client.db('mytester').collection(COLLECTION).find().toArray();
        return results;
    } catch (error) {
        console.error('Unable to find entries ', error);
        throw new Error(error);
    }
}

const findById = async(client, id) => {
    try {
        const result = await client.db('mytester').collection(COLLECTION).findOne({_id: ObjectId(id.toString())});
        return result;
    } catch(error) {
        console.error('Unable to find entries ', error);
        throw new Error(error);
    }
}

module.exports = {
    verifyModel,
    save,
    deleteMany,
    find,
    findById
}