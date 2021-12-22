const app = require('../../app/app');

describe('Check elements in Header', () => {
  it('UI: Check cart link', async () => {
  
    await app.ui.header.isVisible('cart');
    await app.ui.header.click('cart');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/csp-report' && resp.status() === 200);

    app.expect(await app.ui.ph.page.title()).to.includes('Your Shopping Cart');
    await app.ui.ph.page.goBack();

  });

});
