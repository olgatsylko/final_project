const puppeteer = require('puppeteer');

class PageHolder {
    #page = null;
    #browser = null;
    #baseUrl = 'https://www.luxbynox.com/';
 

    get page(){
        return this.#page
    }

    get browser(){
        return this.#browser;
    }
    get baseUrl() {
        return this.#baseUrl;
    }
    async launch(){
        this.#browser = await puppeteer.launch({headless:false, defaultViewport: null,
        args: ['--start-maximized']});
        
    }
    async create() {
        this.#page = await this.#browser.newPage();
    }
    async close() {
        this.#page.close();
    }
    async finish() {
        this.#browser.close();
    }
    async navigate(url = '') {
        if(!url.includes('http')){
            url = `${this.#baseUrl}${url}`;
        }
        await this.#page.goto(url);
      
    }
}

module.exports = new PageHolder();