const BasePage = require('./basePage');

class MainPage extends BasePage {
  get intro() {
    return this.ph.page.$$('.rich-text p');
  }

  get gallery() {
    return this.ph.page.$$('.gallery__image-container img');
  }

  get productImages() {
    return this.ph.page.$$('.product__img-wrapper img');
  }

  get under10pounds() {
    return this.ph.page.$('.flex-active-slide a[href*="under-10"]');
  }

  get collections() {
    //return this.ph.page.$$('#shopify-section-collection-list img');
    return this.ph.page.$$('.one-third>a');
  }

}

module.exports = MainPage;
