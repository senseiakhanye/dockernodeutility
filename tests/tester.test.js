const request = require('supertest');
const Tester = require('../src/models/tester');
const app = require('../src/app');
const { setupDatabase, testOne } = require('./fixtures/db');

beforeEach(setupDatabase);

test("Should save one test", async() => {
    const response = await request(app)
                            .post('/test')
                            .send({ name: testOne.name })
                            .expect(200);
    const testResponse = await Tester.findById(response.body._id);
    expect(testResponse._id).not.toBeNull();
    expect(testResponse.name).toEqual(testOne.name);
});

test("Should get one User", async() => {
    const response = await request(app)
                            .get('/test')
                            .send()
                            .expect(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual(testOne.name);
});