const BaseApi = require ('../../baseApi');

class Config extends BaseApi {
    async getPaymentsConfig(){
        return await this.get('/payments/config?currency=GBP');
    }
}

module.exports = Config;