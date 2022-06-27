// website to find packages
// https://www.npmjs.com/

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about package/project)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// example:
// npm i lodash

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)

// npm install
// installs all missing dependencies that are located in package.json

// dev dependencies (not used in production)
// npm i nodemon -D (or --save-dev)

// uninstall packages
// npm uninstall PackageName