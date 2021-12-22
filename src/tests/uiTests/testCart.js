const app = require('../../app/app');

describe('Verify that User can edit quantity of products', () => {
  it('E2E scenario: Add Product to the cart and edit quantity, clear the cart', async () => {
    await app.ui.productCont.productsOnSale;
    await app.ui.productCont.clickBy('productsOnSale', 0);
    //await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    await app.ui.productCont.isVisible('addToCart');
    const pageTitle = await app.ui.ph.page.title();
    //app.expect(pageTitle).to.include('Train Track Explorer');
    app.expect(pageTitle).to.include('11111');

    await app.ui.productCont.click('addToCart');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.paypalobjects.com/api/checkout.min.js' && resp.status() === 200);
    await app.ui.cartPage.isVisible('quantity');
    await app.ui.cartPage.clearAndInput('2', 'quantity');

    await app.ui.cartPage.click('updateCartButton');
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.cartPage.getText('subTotal')).to.include('£148.00 GBP');

    await app.ui.cartPage.click('removeButton');
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.cartPage.getText('emptyMess')).to.include('Your cart is currently empty.');

  });
});
