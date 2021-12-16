const BasePage = require ('./basePage');

class CartPage extends BasePage {
    get productGrid(){
        return this.ph.page.$('.cart__image-wrapper');
    }

    get removeButton() {
        return this.ph.page.$('.cart__remove');
    }

    get quantity() {
        return this.ph.page.$('.cart__quantity-selector');
    }
    get checkOutButton() {
        return this.ph.page.$(`button[name*="checkout"]`);
    }
    get updateCartButton() {
        return this.ph.page.$(`button[name*='update']`);
    }
    get continueShopButton(){
        return this.ph.page.$(`.grid a[href*='/collections']`);
    }
}

module.exports = CartPage;