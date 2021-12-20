const app = require('../../app/app');

describe('Menu', () => {
  it('UI: Menu - Baby', async () => {
    await app.ui.menu.clickBy('menuItems', 1);
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/collections/baby-explorer' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Developing Babies');
  });

  it('UI: Menu - Child', async () => {
    await app.ui.menu.clickBy('menuItems', 'Child');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/collections/child' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Child Explorers');
  });

  it('UI: Menu - Toddler', async () => {
    await app.ui.menu.clickBy('menuItems', 'Toddler');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/collections/toddlers' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Toddler');
  });

  it('UI: Menu - Parents', async () => {
    await app.ui.menu.clickBy('menuItems', 'Parents');
    await app.ui.ph.page.waitForResponse((resp) => resp.url() === 'https://www.luxbynox.com/blogs/news' && resp.status() === 200);
    await app.ui.ph.page.waitForNavigation();
    app.expect(await app.ui.ph.page.title()).to.includes('Parents');
  });
});
