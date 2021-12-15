class Base {
    #cache = {};

    createGetter(Constructor){
        let key = Constructor.toString();
        if (this.#cache[key]){
            return this.#cache[key];
        }
        let obj = new Constructor();
        this.#cache[key] = obj;
        return obj;
    }
}

module.exports = Base;