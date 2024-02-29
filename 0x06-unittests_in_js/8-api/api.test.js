const expect = require('chai').expect;
const request = require('supertest');
const app = require('./api');

describe('API', function() {
  it('Should display "API available on localhost port 7865"', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
