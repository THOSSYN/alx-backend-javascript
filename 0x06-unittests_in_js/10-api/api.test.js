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

   // Test for correct return value
   it('Should return an object', function(done) {
     request(app)
       .get('/available_payments')
       .expect(200)
       .end(function(err, res) {
         if (err) return done(err);
	 expect(res.text).to.equal({payment_methods: {credit_cards: true, paypal: false}});
	 done();
       });
   });

   // Test correct display of login message to user
   /*it('Should return Welcome :<username>', function(done) {
     const username = 'testuser';
     request(app)
       .post('/login')
       .send({ username: username });
       .expect(200)
       .end(function(err, res) {
         if (err) return done(err);
	 expect(res.text).to.equal(`Welcome :${username}`);
	 done();
       });
   });*/
});
