const BaseObject = require('../baseObject');

class Header extends BaseObject {

    get headerText() {
        return this.ph.page.$('#fsb_bar');
    }
    get cart() {
        return this.ph.page.$('.header-bar__module>a');
    }

}

module.exports = Header;