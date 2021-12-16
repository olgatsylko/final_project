/*const app = require ('../app/app');

describe ('Header', function(){
    it ('UI: Header', async function(){

        await app.ui.ph.page
            .waitForSelector('.iherb-header-cart>a>svg')
            .then(async () => await app.ui.header.click('cart'));
        
        await app.ui.header.click('cart');
       // await app.ui.ph.page.goBack();

    });

    xit ('UI: Cart', async function(){
        await app.ui.header.cart;
        await app.ui.header.click('cart');
        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://checkout1.iherb.com/cart' && resp.status() === 200;
        // })
     
        app.expect(await app.ui.ph.page.title()).to.include('Cart');
        await app.ui.ph.page.goBack();
    });


});*/