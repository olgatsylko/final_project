///////////////Updated

/*const app = require ('../app/app');

describe ('Search option', function(){
    it ('UI: Search input', async function(){
        await app.ui.menu.clickBy('menuItems', 4);
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/products/car-repair-kit.js' && resp.status() === 200;
        })

        await app.ui.search.searchText('train', 'searchInput');
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://cdn.shopify.com/s/global/search.css' && resp.status() === 200;
        })
        await app.ui.ph.page.waitFor(1000);
       
        //await app.ui.search.waitVisible('searchContent');
        let arr = await app.ui.search.searchContent;
        let textResult = await app.ui.search.getTextFromArr(arr[0]);
        app.expect(textResult).to.include('Train');

        await app.ui.search.clickBy('searchContent', 1);
        await app.ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://www.luxbynox.com/cart.json' && resp.status() === 200;
        })
        await app.ui.productCont.click('addToCart');


    });

    it ('API: search end point', async function(){
        const resp = await app.api.srchEndP.getSearch();
        app.expect(resp.status).to.equal(200);
        app.expect(resp.headers['content-type']).to.equal('text/html; charset=utf-8');
        app.expect(resp.headers['server']).to.include('cloudflare');
        app.expect(resp.headers['cf-cache-status']).to.include('DYNAMIC');

    });

});*/