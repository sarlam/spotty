import * as i from '../helpers/getters'

describe('Map', () => {
  it('As User I see a draggable Map when I load the application', () => {
    cy.visit('/')
    cy.get(i.CANVAS).should('exist')
      .should('be.visible')
      .should('have.length', 1)

    cy.get(i.CANVAS).should('not.have.class', 'dragging')

    cy.get(i.CANVAS)
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 60, clientY: 60 })

    cy.get(i.CANVAS).should('have.class', 'dragging')

    cy.get(i.CANVAS)
      .trigger('mouseup', { force: true })

    cy.get(i.CANVAS).should('not.have.class', 'dragging')

    // TODO find out how to test the dragging border stop
    cy.get(i.CANVAS)
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 3000, clientY: 3000 })
      .trigger('mouseup', { force: true })
  })

  it('As User I can resize my window and see the map resize', () => {
    cy.visit('/')
    cy.viewport('iphone-6')
    cy.get(i.CANVAS).should('exist')
      .should('be.visible')
      .should('have.length', 1)
    cy.get(i.CANVAS).invoke('width').should('be.greaterThan', 200)
    cy.get(i.CANVAS).invoke('height').should('be.greaterThan', 550)
  })
})
