const app = require('../../app/app');

describe('Main page', () => {
  xit('API: products end point', async () => {
    const resp = await app.api.product.getProducts();
    app.expect(resp.status).to.equal(200);
    app.expect(resp.headers['content-type']).to.equal('text/javascript; charset=utf-8');
    app.expect(resp.headers['server']).to.include('cloudflare');
  });

});
