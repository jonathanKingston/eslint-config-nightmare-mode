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

  t.is(messages.length, 4);
  t.ok(messages.ruleMatch('max-len'));
  t.ok(messages.ruleMatch('eol-last'));
  t.ok(messages.ruleMatch('no-var'));
  t.ok(messages.ruleMatch('no-unused-vars'));
});

test('Sample code check', (t) => {
  const code = `
    const meow = 12;
    const isACat = 12;

    switch (meow) {
      case isACat:
        console.log('probs a cat');
        break;
      default:
        console.log('probs not a cat');
    }

  `;
  const messages = new CodeChecker(code, config);

  t.is(messages.length, 4);
  t.ok(messages.ruleMatch('no-console'));
  t.ok(messages.ruleMatch('no-undef'));
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

test('one-var', (t) => {
  const code = `
    let a, b, c;
    const me = 12;

    a = '@@@';
    b = '~~~~';
    c = me;
    a++;
    b++;
    c++;

    console.log(\`a \${a} b: \${b} c: \${c}\`);

  `;
  const messages = new CodeChecker(code, config);

  t.is(messages.length, 2);
  t.ok(messages.ruleMatch('no-console'));
  t.ok(messages.ruleMatch('no-undef'));


  const code2 = `
    let a, b, c = 'aaa';

    console.log(\`a \${a} b: \${b} c: \${c}\`);

  `;
  const messages2 = new CodeChecker(code2, config);

  t.is(messages2.length, 4);
  t.ok(messages2.ruleMatch('one-var'));
  t.ok(messages2.ruleMatch('prefer-const'));
  t.ok(messages2.ruleMatch('no-console'));
  t.ok(messages2.ruleMatch('no-undef'));
});
