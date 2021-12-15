const BaseApi = require ('../../baseApi');

class SearchEp extends BaseApi {
    async getSearch(){
        return await this.get('/search?q=train');
    }
}

module.exports = SearchEp;