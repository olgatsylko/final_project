const BaseObject = require ('../baseObject');

class Search extends BaseObject {
    // get searchResults() {
    //     return this.ph.page.$$('.one-fifth>a');
        
    // }
    get searchContent() {
        return this.ph.page.$$(`a[href*='/products']`);
    }

    get searchInput(){
        return this.ph.page.$(`input[type*="search"]`);

    }

    get searchButton(){
        return this.ph.page.$('.btn--search');

    }
}

module.exports = Search;