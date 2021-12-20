const app = require('../../app/app');

describe('Verify that User can add a product to the cart and proceed with check out', () => {
  it('E2E scenario: Add Product to the cart and populate shipping details', async () => {
    await app.ui.productCont.productsOnSale;
    await app.ui.productCont.clickBy('productsOnSale', 0);
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200);

    await app.ui.productCont.isVisible('addToCart');
    const pageTitle = await app.ui.ph.page.title();
    app.expect(pageTitle).to.include('Train Track Explorer');

    await app.ui.productCont.click('addToCart');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.paypalobjects.com/api/checkout.min.js' && resp.status() === 200);

    await app.ui.cartPage.isVisible('productGrid');
    await app.ui.cartPage.isVisible('checkOutButton');
    await app.ui.cartPage.isVisible('updateCartButton');
    await app.ui.cartPage.isVisible('quantity');
    await app.ui.cartPage.isVisible('removeButton');

    await app.ui.cartPage.click('checkOutButton');
    await app.ui.ph.page.waitForNavigation();
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://monorail-edge.shopifysvc.com/unstable/produce_batch' && resp.status() === 200);
    
    await app.ui.checkout.isVisible('email');
    await app.ui.checkout.typeInput('test_test.com', 'email');

    await app.ui.checkout.click('continueShipButton');
    await app.ui.ph.page.waitForNavigation();

    await app.ui.checkout.isVisible('invalidEmailMessage');
    app.expect(await app.ui.checkout.getText('invalidEmailMessage')).to.include('Enter a valid email or a mobile phone number');

    await app.ui.checkout.isVisible('invalidSurnameMessage');
    app.expect(await app.ui.checkout.getText('invalidSurnameMessage')).to.include('Enter a last name');

    await app.ui.checkout.isVisible('invalidAddress1Message');
    app.expect(await app.ui.checkout.getText('invalidAddress1Message')).to.include('Enter an address');

    await app.ui.checkout.scrollDownPage('invalidCityMessage');
    app.expect(await app.ui.checkout.getText('invalidCityMessage')).to.include('Enter a city');

    await app.ui.checkout.clearAndInput('test@test.com', 'email');

    //await app.ui.checkout.isVisible('firstName');
    await app.ui.checkout.typeInput('Kate', 'firstName');

    //await app.ui.checkout.isVisible('lastName');
    await app.ui.checkout.typeInput('Simon', 'lastName');

    //await app.ui.checkout.isVisible('address');
    await app.ui.checkout.typeInput('Lenina str, 1-20', 'address');

    //await app.ui.checkout.isVisible('postCode');
    await app.ui.checkout.typeInput('202019', 'postCode');

    //await app.ui.checkout.isVisible('city');
    await app.ui.checkout.typeInput('Minsk', 'city');

    await app.ui.checkout.click('continueShipButton');
    await app.ui.ph.page.waitForNavigation();

    await app.ui.checkout.isVisible('contact');
    await app.ui.checkout.isVisible('shipTo');

    const contactValue = await app.ui.checkout.getText('contact');
    app.expect(contactValue).to.equal('test@test.com');

    const shipToValue = await app.ui.checkout.getText('shipTo');
    app.expect(shipToValue).to.include('Lenina str, 1-20, 202019 Minsk , Belarus');

    await app.ui.checkout.click('continuePaymentButton');
    await app.ui.ph.page.waitForNavigation();

    const shipMethodValue = await app.ui.checkout.getText('method');
    app.expect(shipMethodValue).to.includes('Standard');

    await app.ui.checkout.isVisible('returnToCartlink');
    await app.ui.checkout.click('returnToCartlink');
    await app.ui.ph.page.waitForNavigation();

    const pageT = await app.ui.ph.page.title();
    app.expect(pageT).to.include('Cart');

    await app.ui.cartPage.click('removeButton');
    await app.ui.ph.page.waitForNavigation();

    await app.ui.cartPage.isVisible('continueShopButton');
    await app.ui.cartPage.click('continueShopButton');
    await app.ui.ph.page.waitForNavigation();

    const pageTl = await app.ui.ph.page.title();
    app.expect(pageTl).to.include('Products');

  });
});
