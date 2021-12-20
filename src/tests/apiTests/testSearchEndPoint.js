const app = require('../../app/app');

describe('Main page', () => {
  xit('API: search end point', async () => {
    const resp = await app.api.srchEndP.getSearch();
    app.expect(resp.status).to.equal(200);
    app.expect(resp.headers['content-type']).to.equal('text/html; charset=utf-8');
    app.expect(resp.headers['server']).to.include('cloudflare');
    app.expect(resp.headers['cf-cache-status']).to.include('DYNAMIC');
  });

});
