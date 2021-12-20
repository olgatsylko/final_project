const printer = require('../config/support/logger');
const app = require('../app/app');

exports.mochaHooks = {

  beforeAll: async function(){
    await app.ui.ph.launch();
  },

  beforeEach: async function () {
    await app.ui.ph.create();
    await app.ui.ph.navigate();
    printer.print('DESCRIBE', `${this.currentTest.parent.title} started`);
    printer.print('IT', `${this.currentTest.title} started`);
  },

  afterEach: async function() {
      printer.print('DESCRIBE', `${this.currentTest.parent.title} test finished`);
      printer.print('IT', `${this.currentTest.title} test finished`);
  },

  afterAll: async function() {
    await app.ui.ph.close();
    await app.ui.ph.finish();
  }
};
