const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API', function() {
  it('Should display "API available on localhost port 7865"', function(done) {
    request('http://localhost:7865/', function(err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
