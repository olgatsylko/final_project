const BaseObject = require ('./objects/baseObject');
const Menu = require ('./objects/controls/menu');
const Header = require ('./objects/controls/header');
const Search = require ('./objects/controls/search');
const ProductContainer = require ('./objects/controls/productContainer');
const CheckOut = require ('./objects/pages/checkOut');
const CartPage = require ('./objects/pages/cartPage');
const MainPage = require ('./objects/pages/mainPage');

class Ui extends BaseObject {

    get menu() {
        return this.createGetter(Menu);
    }

    get header() {
        return this.createGetter(Header);
    }
    get cartPage(){
        return this.createGetter(CartPage);
    }
    get search() {
        return this.createGetter(Search);
    }

    get checkout() {
        return this.createGetter(CheckOut);
    }

    get mainPage() {
        return this.createGetter(MainPage);
    }

    get productCont() {
        return this.createGetter(ProductContainer);
    }

}

module.exports = Ui;