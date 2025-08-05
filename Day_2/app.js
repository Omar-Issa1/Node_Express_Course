const _ = require("lodash");

const nums = [1, [2, [3, [4, [5, [6]]]]]];
const flatarr = _.flattenDeep(nums);
console.log(flatarr);
