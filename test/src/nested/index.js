const html = require('bel')

module.exports = function index (tackle) {
  const base = tackle.lib('base')

  const page = html`<main>
    Hello nested world!
  </main>`

  tackle.write(base(page).toString(), '.html')
}
