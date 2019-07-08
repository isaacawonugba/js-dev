//This file is not transpiled hence must use commonJS and ES5

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha does not recognise
require.extensions['.css'] = function(){};
