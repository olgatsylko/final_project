
const BaseApi = require('../../baseApi');

class CartJson extends BaseApi {
  async getCart() {
    return await this.get('/cart.json');
  }
}

module.exports = CartJson;
