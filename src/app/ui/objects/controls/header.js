const BaseObject = require('../baseObject');

class Header extends BaseObject {

    get headerBar() {
        return this.ph.page.$('.header-bar');
    }
    get cart() {
        return this.ph.page.$('.header-bar__module>a');
    }

}

module.exports = Header;