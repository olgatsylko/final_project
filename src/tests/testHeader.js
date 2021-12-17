//////UPDATED

/*const app = require ('../app/app');

describe ('Check elements in Header', function(){
    it ('UI: Check tex and cart', async function(){
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200;
        })

        let headerValue = await app.ui.header.getText('headerText');
        app.expect(headerValue).to.includes('Free Delivery for orders over £25');

        await app.ui.header.click('cart');
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/csp-report' && resp.status() === 200;
        })

        app.expect(await app.ui.ph.page.title()).to.includes('Your Shopping Cart');
        await app.ui.ph.page.goBack();

    });

});*/