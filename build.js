var fs = require('fs');
var config = require('./index');
fs.writeFile("build/eslint.json", JSON.stringify(config), {encoding: 'utf8'},
function (err) {
  if (err) {
    throw err;
  }
  console.log('Built');
});
