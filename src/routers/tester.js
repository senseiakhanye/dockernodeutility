const express = require('express');
const Tester = require('../controllers/tester');
const routers = express.Router();
const MongoClient = require('../db/mongoclient');

routers.get('/passtest', async(req, res) => {
    res.status(200).send({
        "ok": "ok"
    });
})

routers.get('/test', async (req, res) => {
    try {
        const client = await MongoClient.getClient();
        const allList = await Tester.find(client, {});
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send(error);
    }
    
    
});

routers.post('/test', async (req, res) => {
    const client = await MongoClient.getClient();
    const tester = Tester.verifyModel(req.body);
    Tester.save(client, tester).then(() => {
        res.status(200).send(tester);
    }).catch(error => {
        res.status(400).send(error);
    })
});

module.exports = routers;