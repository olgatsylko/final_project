const Ui = require('./ui/ui');
const chai = require ('chai');
chai.use(require('chai-json-schema'));
const Base = require ('./base');
const Api = require ('./api/api');

class App extends Base {
    get expect() {
        return chai.expect;
    }
    get ui() {
        return this.createGetter(Ui);
    }
    get api() {
        return this.createGetter(Api);
    }

}

module.exports = new App();