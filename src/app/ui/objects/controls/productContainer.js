const BaseObject = require('../baseObject');

class ProductContainer extends BaseObject {
  get productsOnSale() {
    return this.ph.page.$$('.on-sale>a');
  }

  get addToCart() {
    return this.ph.page.$('#AddToCart');
  }
}

module.exports = ProductContainer;
