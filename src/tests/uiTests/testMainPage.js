const app = require('../../app/app');

describe('Main page', () => {
  it('UI: main page elements', async () => {
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/cart.json' && resp.status() === 200);
    await app.ui.mainPage.whatPage();

    const arr = await app.ui.mainPage.intro;
    const text = await app.ui.mainPage.getTextFromArr(arr[0]);
    app.expect(text).to.includes('We\'re on a very simple mission to enrich children\'s play with sustainable and eco-conscious toys');

    const text1 = await app.ui.mainPage.getTextFromArr(arr[1]);
    app.expect(text1).to.includes('Globally, 90% of the toys on the market are made of plastic.');

    const text2 = await app.ui.mainPage.getTextFromArr(arr[2]);
    app.expect(text2).to.includes('All of our toys at Lux Play are made with predominantly natural materials such as wood and bamboo');

    const productImages = await app.ui.mainPage.productImages;
    app.expect(productImages.length).to.equal(11);

    const galleryArray = await app.ui.mainPage.gallery;
    app.expect(galleryArray.length).to.equal(7);

    const collectionsArr = await app.ui.mainPage.collections;
    app.expect(collectionsArr.length).to.equal(6);

    await app.ui.mainPage.scrollDownPage('under10pounds');

    await app.ui.mainPage.clickBy('collections', 0);
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/collections/train-sets' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Train Sets');

  });
});
