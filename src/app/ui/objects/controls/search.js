const BaseObject = require('../baseObject');

class Search extends BaseObject {

  get searchContent() {
    return this.ph.page.$$('a[href*=\'/products\']');
  }

  get searchInput() {
    return this.ph.page.$('input[type*="search"]');
  }

  get searchButton() {
    return this.ph.page.$('.btn--search');
  }
}

module.exports = Search;
