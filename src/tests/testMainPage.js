//////////////Updated

/*const app = require ('../app/app');

describe ('Main page', function(){
    it ('UI: main page elements', async function(){
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/cart.json' && resp.status() === 200;
        })
        
        //await app.ui.ph.page.waitFor(2000);
        //await app.ui.ph.page.waitForNavigation();

        let arr = await app.ui.mainPage.intro;
        let text = await app.ui.mainPage.getTextFromArr(arr[0]);
        app.expect(text).to.includes(`We're on a very simple mission to enrich children's play with sustainable and eco-conscious toys`);

        let text1 = await app.ui.mainPage.getTextFromArr(arr[1]);
        app.expect(text1).to.includes(`Globally, 90% of the toys on the market are made of plastic.`);

        let text2 = await app.ui.mainPage.getTextFromArr(arr[2]);
        app.expect(text2).to.includes(`All of our toys at Lux Play are made with predominantly natural materials such as wood and bamboo`);

        let productImages = await app.ui.mainPage.productImages;
        app.expect(productImages.length).to.equal(11);

        let galleryArray = await app.ui.mainPage.gallery;
        app.expect(galleryArray.length).to.equal(7);

        let collectionsArr = await app.ui.mainPage.collections;
        app.expect(collectionsArr.length).to.equal(3);

        await app.ui.mainPage.isVisible('under10pounds');

        // let a = await app.ui.productCont.productsOnSale;
        // await app.ui.productCont.isVisible(a[0]);
       // await app.ui.mainPage.isVisible('gallery');
        
        // await app.ui.productCont.clickBy('panelItems', 0);
        

    });

    xit ('API: cart end point', async function(){
        const resp = await app.api.cartJson.getCart();
        app.expect(resp.status).to.equal(200);
        app.expect(resp.headers['content-type']).to.equal('application/json; charset=utf-8');
        app.expect(resp.headers['server']).to.include('cloudflare');
        app.expect(resp.headers['cf-cache-status']).to.include('DYNAMIC');
        app.expect(resp.data).to.be.jsonSchema(app.api.schema.cartSchema);

    });

    xit ('API: products end point', async function(){
        const resp = await app.api.product.getProducts();
        app.expect(resp.status).to.equal(200);
        app.expect(resp.headers['content-type']).to.equal('text/javascript; charset=utf-8');
        app.expect(resp.headers['server']).to.include('cloudflare');
    });
});*/