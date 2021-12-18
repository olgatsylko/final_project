const app = require ('../app/app');

describe ('CheckOut: check validation messages', function(){
    it ('UI: Validate correct format of email, mandatory fields', async function(){
        await app.ui.productCont.productsOnSale;
        await app.ui.productCont.clickBy('productsOnSale', 0);
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200;
        })
        
        await app.ui.productCont.isVisible('addToCart');
        let pageTitle =await app.ui.ph.page.title();
        app.expect(pageTitle).to.include('Train Track Explorer');

        await app.ui.productCont.click('addToCart');
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.paypalobjects.com/api/checkout.min.js' && resp.status() === 200;
        })
    
        await app.ui.cartPage.isVisible('productGrid');
        await app.ui.cartPage.isVisible('checkOutButton');
   

        await app.ui.cartPage.click('checkOutButton');
        await app.ui.ph.page.waitForNavigation();
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
    });

})