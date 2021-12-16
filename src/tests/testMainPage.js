const app = require ('../app/app');

describe ('Main page', function(){
    it ('UI: main page elements', async function(){
        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://www.luxbynox.com/payments/config?currency=GBP' && resp.status() === 200;
        // })
        
        await app.ui.ph.page.waitFor(2000);
        //await app.ui.ph.page.waitForNavigation();

        let arr = await app.ui.mainPage.intro;
        let text = await app.ui.mainPage.getTextFromArr(arr[0]);
        app.expect(text).to.includes(`We're on a very simple mission to enrich children's play with sustainable and eco-conscious toys`);

        let text1 = await app.ui.mainPage.getTextFromArr(arr[1]);
        app.expect(text1).to.includes(`Globally, 90% of the toys on the market are made of plastic.`);

        let text2 = await app.ui.mainPage.getTextFromArr(arr[2]);
        app.expect(text2).to.includes(`All of our toys at Lux Play are made with predominantly natural materials such as wood and bamboo`);

        // let a = await app.ui.productCont.productsOnSale;
        // await app.ui.productCont.isVisible(a[0]);
        await app.ui.mainPage.isVisible('gallery');





        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === '' && resp.status() === 200;
        // })
        
        // await app.ui.productCont.clickBy('panelItems', 0);
        // await app.ui.productCont.click('addToCart');

    });

    // it ('API:', async function(){
    
    // });

});