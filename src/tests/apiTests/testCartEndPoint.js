const app = require('../../app/app');

describe('Main page', () => {
  xit('API: cart end point', async () => {
    const resp = await app.api.cartJson.getCart();
    app.expect(resp.status).to.equal(200);
    app.expect(resp.headers['content-type']).to.equal('application/json; charset=utf-8');
    app.expect(resp.headers['server']).to.include('cloudflare');
    app.expect(resp.headers['cf-cache-status']).to.include('DYNAMIC');
    app.expect(resp.data).to.be.jsonSchema(app.api.schema.cartSchema);

  });
});