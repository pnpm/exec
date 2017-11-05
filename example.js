'use strict'
const pnpm = require('@pnpm/exec').default

pnpm(['install'])
  .then(() => console.log('Done'))
  .catch(console.error.bind(console))
