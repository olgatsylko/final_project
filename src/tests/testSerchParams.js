////////UPDATED

/*const app = require ('../app/app');

async function search(args) {
    await app.ui.search.searchText(args, 'searchInput');
    await app.ui.ph.page.waitForNavigation();
    let arr = await app.ui.search.searchContent;
    return arr;
}

describe('Search with Parameters', function() {
    const tests = [
        {args: ['Train'], expected: 'Train'},
        {args: ['Puzzles'], expected: 'Puzzles'},
        {args: ['Montessori'], expected: 'Montessori'}
    ];
  
    tests.forEach(({args, expected}) => {
        it(`Validate that search results include search value`, async function() {
            await app.ui.menu.clickBy('menuItems', 4);
            await app.ui.ph.page.waitForNavigation();
            await app.ui.search.isVisible('searchInput');
            await search(args);
            app.expect(await app.ui.ph.page.title()).to.includes(expected);

        });
    });
});*/