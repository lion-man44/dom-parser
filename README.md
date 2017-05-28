# dom-parser
this package is dom parse from string.
Simple is best!

# Installation

```bash
$ npm i --save @orange-lion/dom-parser
```

# Usage

```
const toHTML = require('@orange-lion/dom-parser');

const html = toHTML(`
  <div class='hoge'>
    <p>Test</p>
  </div>
`);
//=> HTMLElement
```

```
import toHTML from '@orange-lion/dom-parser';

const html = toHTML(`
  <div class='hoge'>
    <p>Test</p>
  </div>
`);
//=> HTMLElement
```
