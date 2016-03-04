# Eslint-config-nightmare-mode

This config is designed to have everything enabled but still be as close to 'normal' JavaScript development as possible whist also being very paranoid and excessive to most developers.

The intent is to expand this set of rules where possible to keep as strict as possible. When using this should allow authors to disable rules only rather than having to enable and disable.

## Install and setup

* npm install -g eslint-config-nightmare-mode
* Add `extends: "nightmare-mode"` to your `.eslintrc`
* Spend a long time fixing bugs

## Alternative setups

For other flavours of nightmare-mode try using:

### Node
`extends: "nightmare-mode/node"`

### Browser
`extends: "nightmare-mode/browser"`

## Licence

The MIT License (MIT)

Copyright (c) 2016 Jonathan Kingston

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
