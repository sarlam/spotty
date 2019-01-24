const CANVAS = '[data-cy="canvas-stage"]'

describe('Map', () => {
  it('As User I see a Map when I load the application', () => {
    cy.visit('/')
    cy.get(CANVAS).should('exist')
      .should('be.visible')
      .should('have.length', 1)
  })

  it('As User I can resize my window and see the map resize', () => {
    cy.visit('/')
    cy.viewport('iphone-6')
    cy.get(CANVAS).should('exist')
      .should('be.visible')
      .should('have.length', 1)
    cy.get(CANVAS).invoke('width').should('be.greaterThan', 200)
    cy.get(CANVAS).invoke('height').should('be.greaterThan', 550)
  })
})
