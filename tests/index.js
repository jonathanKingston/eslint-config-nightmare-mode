var chai = require('chai');
var assert = chai.assert;
var fs = require('fs');
var CLIEngine = require('eslint').CLIEngine;

describe('eslint-config-nightmare-mode', function () {
  var eslintOptions = {};
  var instance = new CLIEngine(eslintOptions);
  var result = instance.executeOnFiles(['./tests/fixtures/in']);

  it('should use rules', function () {

    assert.isArray(result.results);
  });

  it('rule outputs match', function () {

    result.results.forEach(function (fileCheck) {
      var filePath = fileCheck.filePath.replace(/\/in\//, '/out/');
      var fileContents = fs.readFileSync(filePath, {encoding: 'utf8'});
      var serialisedContent = JSON.stringify(fileCheck.messages);

      assert.equal(fileContents.trim(), serialisedContent.trim());
    });
  });
});
