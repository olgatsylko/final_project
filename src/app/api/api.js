const BaseApi = require ('./baseApi');
const Config = require ('./endpoints/payments/config');
const CartJson = require ('./endpoints/cart/cartJson');
const SearchEp = require ('./endpoints/search/search');
const schema = require ('../api/schemas/schema');

class Api extends BaseApi {
    schema = schema;

    get cartJson() {
        return this.createGetter(CartJson);
    }

    get config() {
        return  this.createGetter(Config);
    }

    get srchEndP(){
        return  this.createGetter(SearchEp);
    }

}

module.exports = Api;