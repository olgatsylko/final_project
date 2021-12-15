const path = require ('path');

module.exports = {
    colour: 'true',
    extension: ['js', 'mjs', 'cjs'],
    parallel: 'true',
    recursive: 'false',
    reporter: 'spec',
    retries: 0,
    slow: '75',
    sort: false,
    spec: [path.resolve(process.cwd(), 'src/tests/**/*.js')], //['src/tests/**/*.js']
    timeout: '200000',
    ui: 'bdd',
    require: './src/tests/hooks.js'
  };


