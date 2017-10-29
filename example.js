'use strict'
const pnpm = require('./lib').default

pnpm(['install'])
  .then(() => console.log('Done'))
  .catch(console.error.bind(console))
