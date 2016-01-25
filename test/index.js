import test from 'ava';
import CodeChecker from 'eslint-code-review';
import config from '../index.js';

test('Check output', (t) => {
  const code = `
    let x = 'y';

    console.log(x);

  `;
  const messages = new CodeChecker(code, config);
  t.is(messages.length, 3);
  t.ok(messages.ruleMatch('prefer-const'));
  t.ok(messages.ruleMatch('no-console'));
  t.ok(messages.ruleMatch('no-undef'));
});

test('length check', (t) => {
  const code = `
    var spoon = 'thhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiisssss iss longgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg';
  `;
  const messages = new CodeChecker(code, config);

  t.is(messages.length, 3);
  t.ok(messages.ruleMatch('max-len'));
  t.ok(messages.ruleMatch('no-var'));
  t.ok(messages.ruleMatch('no-unused-vars'));
});

test('magic-numbers', (t) => {
  const code = `
    const me = 12;

    export default function me2(x) {
      return me * x * 80;
    }
  `;
  const messages = new CodeChecker(code, config);

  t.is(messages.length, 1);
  t.ok(messages.ruleMatch('no-magic-numbers'));
});
