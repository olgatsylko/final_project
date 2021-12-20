const printer = require('../../../config/support/logger');
const Base = require('../../base');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

class BaseObject extends Base {
  #ph = require('../pageHolder');

  get ph() {
    return this.#ph;
  }

  async typeInput(text, element) {
    const input = await this[element];
    await input.type(text, { delay: 200 });
    printer.print('method', `Value '${text}' is typed in '${element}'`);
  }

  async clearAndInput(text, element) {
    const input = await this[element];
    await input.click({ clickCount: 3 });
    printer.print('method', `Input '${element}' is cleared out`);
    await input.type(text, { delay: 200 });
    printer.print('method', `Value '${text}' is typed in '${element}'`);
  }

  async searchText(text, element) {
    const elementHandle = await this[element];
    await elementHandle.type(text, { delay: 200 });
    printer.print('method', `Value '${text}' is typed in '${element}'`);
    await elementHandle.press('Enter');
    printer.print('method', 'Enter is pressed');
  }

  async getText(element) {
    const text = (await ((await this[element]).evaluate((node) => node.innerText))).trim();
    printer.print('method', `Element '${element}' has text '${text}'`);
    return text;
  }

  async getTextFromArr(element) {
    const txt = (await this.#ph.page.evaluate((element) => element.textContent, element)).trim();
    printer.print('method', `Element has text '${txt}'`);
    return txt;
    //return (await this.#ph.page.evaluate((element) => element.textContent, element)).trim();
  }

  async click(element) {
    const el = await this[element];
    printer.print('method', `Click on Element '${element}'`);
    await el.click();
    printer.print('method', `Clicked on Element '${element}'`);
  }

  async isVisible(element) {
    const el = await this[element];
    if (await el.isIntersectingViewport()) {
      printer.print('method', `Element '${element}' is visible`);
    } else {
      printer.print('method', `Element '${element}' is NOT visible`);
    }
  }

  async waitVisible(element) {
    await this.#ph.page.waitForFunction(async () => {
      try {
        const target = await this[element];
        const box = await target.boundingBox();
        printer.print('method', `Element '${element}' is visible`);
        return !!box;

      } catch (err) {
        console.log(err.message);
        return false;
      }
    });
  }

  async scrollDownPage(element) {
    let isValueAvailable = true;
    const el = await this[element];
    while (isValueAvailable) {
      await scrollPageToBottom(await this.#ph.page, { size: 500 });
      // isValueAvailable = await el.isIntersectingViewport();
      isValueAvailable = await el.boundingBox();
      printer.print('method', `Element '${element}' is visible`);
      isValueAvailable = false;
    }
  }

  async clickBy(elements, textOrPosition) {
    const arr = await this[elements];
    if (!Array.isArray(arr)) {
      printer.print('Error', 'The method works with just array of elements');
      throw new Error('Wrong type of \'elements\' argument, should be an array');
    }
    if (typeof textOrPosition === 'number') {
      printer.print('method', `Click on Element '${elements}' with position '${textOrPosition}'`);
      await arr[textOrPosition].click();
      printer.print('method', 'Element is clicked');
    } else {
      printer.print('method', `Click on Element '${elements}' with text '${textOrPosition}'`);
      for (const element of arr) {
        const text = await (await element.evaluate((node) => node.innerText)).trim();
        if (text === textOrPosition) {
          await element.click();
          printer.print('method', 'Element is clicked');
          break;
        }
      }
    }
  }
}

module.exports = BaseObject;
