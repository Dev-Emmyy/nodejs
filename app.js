const _ = require("lodash");

const arrayedItems = [1,[2,[3,4,[5]]]];
const arrangedItems = _.flattenDeep(arrayedItems);

console.log(arrangedItems);
console.log("Hello Eclipse World");