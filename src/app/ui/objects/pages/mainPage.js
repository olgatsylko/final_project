const BasePage = require ('./basePage');

class MainPage extends BasePage {
    get intro() {
        return this.ph.page.$$('.rich-text p');
    }

    get gallery(){
        return this.ph.page.$$('.gallery__image-container img');
    }

}

module.exports = MainPage;