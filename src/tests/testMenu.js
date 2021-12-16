////////////UPADTED

/*const app = require ('../app/app');

describe ('Menu', function(){
    xit ('UI: Menu', async function(){
    await app.ui.menu.clickBy('menuItems', 1)
    await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/collections/baby-explorer' && resp.status() === 200;
    })

    //app.expect(await app.ui.ph.page.title()).to.include('Baby');
    //await app.ui.ph.page.goBack();
    //await app.ui.ph.page.waitFor(3000);

    });

    it ('UI: Cart', async function(){
        await app.ui.header.click('cart');
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/cart' && resp.status() === 200;
        })
       // await app.ui.ph.page.goBack();
    
        const [response] = await Promise.all([
            await app.ui.ph.page.waitForNavigation(), // The promise resolves after navigation has finished
            await app.ui.ph.navigate('https://www.luxbynox.com'), // Clicking the link will indirectly cause a navigation
          ]);
    
    });
    it ('UI: Content', async function(){
        await app.ui.productCont.productsOnSale;
        await app.ui.productCont.clickBy('productsOnSale', 0);
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200;
        })
        //await app.ui.ph.page.waitFor(1000);

        await app.ui.productCont.isVisible('addToCart');
        let pageTitle =await app.ui.ph.page.title();
        app.expect(pageTitle).to.include('Train Track Explorer');

        await app.ui.productCont.click('addToCart');
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/cart' && resp.status() === 200;
        })

    });


    it ('UI: Collections', async function(){
        await app.ui.productCont.clickBy('collections', 0);
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/collections/train-sets' && resp.status() === 200;
        })

    });


    it ('API: cart end point', async function(){
        const resp = await app.api.cartJson.getCart();
        app.expect(resp.status).to.equal(200);
        app.expect(resp.headers['content-type']).to.equal('application/json; charset=utf-8');
        app.expect(resp.headers['server']).to.include('cloudflare');
        app.expect(resp.headers['cf-cache-status']).to.include('DYNAMIC');
        app.expect(resp.data).to.be.jsonSchema(app.api.schema.cartSchema);

    });


});*/