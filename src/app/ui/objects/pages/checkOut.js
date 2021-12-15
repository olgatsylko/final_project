const BasePage = require ('./basePage');

class CheckOut extends BasePage {
    get customBanner() {
        return this.ph.page.$$('.hp-banners-menu-row li>a');
    }
    get recommends(){
        return this.ph.page.$('#recommendations h3');
    }

    get recViewAll() {
        return this.ph.page.$('#recommendations #recommendations-view-all'); 
        //return this.ph.page.$(`a[href*='recommended-for-you?type=2']`)
    }; 

    get recommendFilterButton(){
        return this.ph.page.$('.recommended-filter .active')
    }

}

module.exports = CheckOut;