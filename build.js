var fs = require('fs');
var path = require('path');
var config = require('./index');

function makeDir(dir, callback) {
  fs.mkdir(dir, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
}

function writeJson(path) {
  fs.writeFile(fullPath, JSON.stringify(config), {encoding: 'utf8'}, (err) => {
    if (err) {
      throw err;
    }

    console.log('Built');
  });
}

// We can't write the build.json file if we don't have the `build` dir.
const dir = "build";
const jsonFile = "eslint.json";
const fullPath = path.join(dir, jsonFile);

fs.stat(dir, (err) => {
  if (err) {
    makeDir(dir, () => writeJson(fullPath));
  }
  else {
    writeJson(fullPath);
  }
});
