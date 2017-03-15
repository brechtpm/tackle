const html = require('bel')

module.exports = function index (tackle) {
  const base = require(tackle.lib('base'))

  const page = html`<main>
    Hello world!
  </main>`

  tackle.write(base(page).toString(), '.html')
}
