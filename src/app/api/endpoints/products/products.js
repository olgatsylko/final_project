const BaseApi = require ('../../baseApi');

class Product extends BaseApi {
    async getProducts(){
        return await this.get('/products/car-repair-kit.js');
    }
}

module.exports = Product;