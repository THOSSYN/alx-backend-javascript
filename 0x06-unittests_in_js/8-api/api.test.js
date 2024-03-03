const request = require('supertest');
const { expect } = require('chai');
const server = require('./api');

describe('API', function() {
  it('Should display "API available on localhost port 7865"', function(done) {
    request(server)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          if (err.code === 'EADDRINUSE') {
            console.error('Port 7865 is already in use. Please stop the existing server.');
            this.skip();
          } else {
            console.error('Error:', err.message); // Log other errors
            return done(err);
          }
        }
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
