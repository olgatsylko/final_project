const BaseApi = require ('./baseApi');
const Product = require ('./endpoints/products/products');
const CartJson = require ('./endpoints/cart/cartJson');
const SearchEp = require ('./endpoints/search/search');
const schema = require ('../api/schemas/schema');

class Api extends BaseApi {
    schema = schema;

    get cartJson() {
        return this.createGetter(CartJson);
    }

    get product() {
        return  this.createGetter(Product);
    }

    get srchEndP(){
        return  this.createGetter(SearchEp);
    }

}

module.exports = Api;