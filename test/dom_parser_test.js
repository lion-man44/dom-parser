const toHTML = require('../dom_parser');

describe('#toHTML', () => {
  const getType = (any) => {
    return Object.prototype.toString.call(any).slice(8, -1);
  };

  describe('Give string parameter', () => {
    it('Should return HTMLDivElement', () => {
      const str = `
        <div class='dropdown' aria-hasOpen='true'>
          <p class='name'>This package name dom-parser</p>
        </div>
      `;
      const html = toHTML(str);

      assert.equal(getType(html), 'HTMLDivElement');
    });

    it('Should return HTMLParagraphElement', () => {
      const str = `
        <p id='p-id'>This is a pen</p>
      `;
      const html = toHTML(str);

      assert.equal(getType(html), 'HTMLParagraphElement');
    });
  });
});
