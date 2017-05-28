(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const parser = new window.DOMParser();

/**
 * To HTML from string
 *
 * @param {string} elStr - element string
 *  example:
 *    '<div class='this-class'><p>element string</p></div>'
 * @return {HTMLElement} HTML stringize the string passed in the parameter.
 *  example:
 *    <div class='this-class'>
 *      <p>HTML element</p>
 *    </div>
 */
const toHTML = (elStr) => {
  const e = elStr.match(/<([a-z]+)[ |>]/)[1];
  return parser.parseFromString(elStr, 'text/html').querySelector(e);
};

module.exports = toHTML;

},{}],2:[function(require,module,exports){
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

},{"../dom_parser":1}]},{},[2]);
