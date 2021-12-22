const app = require('../../app/app');

describe('Search option', () => {
  it('UI: Search input', async () => {
    await app.ui.menu.clickBy('menuItems', 4);
    await app.ui.ph.page.waitForNavigation();

    await app.ui.search.searchText('train', 'searchInput');
    await app.ui.ph.page.waitForNavigation();

    const arr = await app.ui.search.searchContent;
    const textResult = await app.ui.search.getTextFromArr(arr[0]);
    app.expect(textResult).to.include('Train');

    await app.ui.search.clickBy('searchContent', 1);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.include('Numbers Train');

  });

});
