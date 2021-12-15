const BaseObject = require('../baseObject');


class Menu extends BaseObject {
    get menuItems() {
        return this.ph.page.$$('#AccessibleNav>li');
    }
 
}

module.exports = Menu;