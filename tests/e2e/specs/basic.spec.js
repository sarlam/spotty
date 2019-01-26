import info from '../../../package'

import * as i from '../helpers/getters'

describe('Basic', () => {
  it('Should show the about modal', () => {
    cy.visit('/')

    cy.get(i.ABOUT_MODAL).should('not.be.visible')
    cy.get(i.ABOUT_BTN_OPEN).click()
    cy.get(i.ABOUT_MODAL).should('be.visible')
    cy.contains(info.author.name).should('be.visible')
    cy.contains(info.license).should('be.visible')
    cy.get(i.ABOUT_BTN_CLOSE).click()
    cy.get(i.ABOUT_MODAL).should('not.be.visible')
  })
})
