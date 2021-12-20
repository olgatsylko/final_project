require('mocha-allure-reporter');

const printer = require('../config/support/logger');
const app = require('../app/app');


exports.mochaHooks = {
  //count: 0,

  async beforeAll() {
    await app.ui.ph.launch();
  },
  async beforeEach() {
    await app.ui.ph.create();
    await app.ui.ph.navigate();
    printer.print('DESCRIBE', `${this.currentTest.parent.title} started`);
    printer.print('IT', `${this.currentTest.title} started`);
    //this.count++;

  },
  afterEach() {
    printer.print('DESCRIBE', `${this.currentTest.parent.title} finished`);
    printer.print('IT', `${this.currentTest.title} finished`);
  },
  async afterAll() {
    await app.ui.ph.close();
    await app.ui.ph.finish();
  // console.log(`The number of run tests is ${this.count}`);
  }
};
