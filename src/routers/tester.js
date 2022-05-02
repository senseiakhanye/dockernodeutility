const express = require('express');
const Tester = require('../models/tester');
const routers = express.Router();

routers.get('/test', async (req, res) => {
    try {
        const allList = await Tester.find({});
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send(error);
    }
    
    
});

routers.post('/test', (req, res) => {
    const tester = new Tester({
        name: req.body.name
    });
    tester.save().then(() => {
        res.status(200).send(tester);
    }).catch(error => {
        res.status(400).send(error);
    })
});

module.exports = routers;