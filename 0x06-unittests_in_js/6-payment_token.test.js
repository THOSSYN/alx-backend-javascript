//const expect = require('chai').expect;
//const getPaymentTokenFromAPI = require('./6-payment_token');
import { getPaymentTokenFromAPI from './6-payment_token';
import { expect } from 'chai';

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with { data: "Successful response from the API" } when success is true', async function() {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: 'Successful response from the API' });
  });

  it('should resolve with undefined when success is false', async function() {
    const result = await getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
