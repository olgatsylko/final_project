class Base {
  #cache = {};

  createGetter(Constructor) {
    const key = Constructor.toString();
    if (this.#cache[key]) {
      return this.#cache[key];
    }
    const obj = new Constructor();
    this.#cache[key] = obj;
    return obj;
  }
}

module.exports = Base;
