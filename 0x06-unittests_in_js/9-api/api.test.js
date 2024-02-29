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

  // Test for correct status code when :id is a number
  it('Should return 200 when :id is a number', function(done) {
    const validId = 123; // A valid numeric id
    request(app)
      .get(`/cart/${validId}`)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
   });

   // Test for correct status code when :id is NOT a number (=> 404)
   it('Should return 404 when :id is not a number', function(done) {
     const invalidId = 'abc'; // An invalid non-numeric id
     request(app)
       .get(`/cart/${invalidId}`)
       .expect(404)
       .end(function(err, res) {
         if (err) return done(err);
         done();
       });
   });
});
