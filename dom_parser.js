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
