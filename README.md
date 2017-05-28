# dom-parser
this package is dom parse from string.
Simple is best!

# Installation

```zsh
$ npm i --save @orange-lion/dom-parser
```

# Usage

```js
const toHTML = require('@orange-lion/dom-parser');

const html = toHTML(`
  <div class='hoge'>
    <p>Test</p>
  </div>
`);
//=> HTMLElement
```

```js
import toHTML from '@orange-lion/dom-parser';

const html = toHTML(`
  <div class='hoge'>
    <p>Test</p>
  </div>
`);
//=> HTMLElement
```
