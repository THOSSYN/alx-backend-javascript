const request = require('supertest');
const { expect } = require('chai');
const server = require('./api');

describe('API', function() {
  // Test for GET /
  it('Test for GET / returns "Welcome to the payment system"', function(done) {
    request(server)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
