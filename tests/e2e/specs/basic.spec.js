import info from '../../../package'

const ABOUT_BTN_OPEN = '[data-cy="about-btn-open"]'
const ABOUT_BTN_CLOSE = '[data-cy="about-btn-close"]'
const ABOUT_MODAL = '[data-cy="about-modal"]'

describe('Basic', () => {
  it('Should show the about modal', () => {
    cy.visit('/')

    cy.get(ABOUT_MODAL).should('not.be.visible')
    cy.get(ABOUT_BTN_OPEN).click()
    cy.get(ABOUT_MODAL).should('be.visible')
    cy.contains(info.author.name).should('be.visible')
    cy.contains(info.license).should('be.visible')
    cy.get(ABOUT_BTN_CLOSE).click()
    cy.get(ABOUT_MODAL).should('not.be.visible')
  })
})
