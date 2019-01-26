import * as i from '../helpers/getters'

describe('POI', () => {
  it('As a user I can create a new POI', () => {
    const firstPoint = {x: 500, y: 200}
    const secondPoint = {x: 400, y: 400}
    cy.visit('/')
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.CANVAS).click(firstPoint)

    cy.get(i.EDITION_DRAWER_WRAPPER).should('be.visible')
    cy.get(i.EDITION_DRAWER_CLOSE).click()
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')

    cy.get(i.CANVAS).click(firstPoint)

    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')
    cy.get(i.EDITION_DRAWER_FORM_SUBMIT).click()
    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')

    cy.get(i.EDITION_DRAWER_FORM_NAME).type('A Super name !')

    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')
    cy.get(i.EDITION_DRAWER_FORM_SUBMIT).click()
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')


    cy.get(i.CANVAS).click(secondPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')

    cy.get(i.CANVAS).click(firstPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

    cy.get(i.CANVAS).click(secondPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')

    cy.get(i.CANVAS).click(secondPoint)
    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')

  })

  it('Should change the position of the new POI during creation', () => {
    const firstPoint = {x: 500, y: 200}
    const secondPoint = {x: 400, y: 400}
    cy.visit('/')
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.CANVAS).click(firstPoint)
    cy.get(i.EDITION_DRAWER_FORM_NAME).type('A Super name !')

    cy.get(i.CANVAS).click(secondPoint)
    cy.get(i.EDITION_DRAWER_FORM_NAME).invoke('val').should('equal', 'A Super name !')
    cy.get(i.EDITION_DRAWER_WRAPPER).should('be.visible')
  })
})
