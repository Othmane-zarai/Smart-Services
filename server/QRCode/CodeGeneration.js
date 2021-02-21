var CodeGenerator = require('node-code-generator');
var generator = new CodeGenerator();
var pattern = 'Z#A*Y+';
var howMany = 1;
var options = {};
// Generate an array of random unique codes according to the provided pattern:
var codes = generator.generateCodes(pattern, howMany, options);
module.exports = codes;