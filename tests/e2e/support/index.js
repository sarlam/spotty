// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { isEmpty } from 'lodash'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Gather nyc coverage reports
const istanbul = require('istanbul-lib-coverage')

const map = istanbul.createCoverageMap({})

const NYC_OUTPUT = '.nyc_output/out.json'

before(() => {
  cy.readFile(NYC_OUTPUT).then(storedIstanbulMap => {
    if (!isEmpty(storedIstanbulMap)) {
      map.merge(storedIstanbulMap)
    }
  })
})

Cypress.on('window:before:unload', e => {
  const coverage = e.currentTarget.__coverage__

  if (coverage) {
    map.merge(coverage)
  }
})

after(() => {
  cy.window().then(win => {
    const coverage = win.__coverage__

    if (coverage) {
      map.merge(coverage)
    }

    cy.writeFile(NYC_OUTPUT, JSON.stringify(map))
  })
})
