import * as i from '../helpers/getters'

describe('POI', () => {
  it('As a user I can create a new POI', () => {
    const firstPoint = { x: 500, y: 200 }
    const secondPoint = { x: 400, y: 400 }
    cy.visit('/')
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.BODY).click(firstPoint)

    cy.get(i.EDITION_DRAWER_WRAPPER).should('be.visible')
    cy.get(i.EDITION_DRAWER_CLOSE).click()
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')

    cy.get(i.BODY).click(firstPoint)

    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')
    cy.get(i.EDITION_DRAWER_FORM_SUBMIT).click()
    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')

    cy.get(i.EDITION_DRAWER_FORM_NAME).type('A Super name !')

    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')
    cy.get(i.EDITION_DRAWER_FORM_SUBMIT).click()
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

    cy.get(i.BODY).click(secondPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')

    cy.get(i.BODY).click(firstPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

    cy.get(i.BODY).click(secondPoint)
    cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')

    cy.get(i.BODY).click(secondPoint)
    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')
  })

  it('Should change the position of the new POI during creation', () => {
    const firstPoint = { x: 400, y: 400 }
    const secondPoint = { x: 200, y: 500 }
    cy.visit('/')
    cy.wait(500) // ugly arbitrary wait !
    cy.get(i.EDITION_DRAWER_FORM).should('not.be.visible')
    cy.get(i.BODY).click(firstPoint)
    cy.get(i.EDITION_DRAWER_FORM).should('be.visible')
    cy.get(i.EDITION_DRAWER_FORM_NAME).type('A Super name !')

    cy.get(i.BODY).click(secondPoint)

    cy.get(i.CANVAS)
      .trigger('mousedown', { which: 1, clientX: secondPoint.x, clientY: secondPoint.y })
      .trigger('mousemove', { clientX: 100, clientY: 100 })
      .trigger('mouseup', { force: true })

    cy.get(i.EDITION_DRAWER_FORM_NAME).invoke('val').should('equal', 'A Super name !')
    cy.get(i.EDITION_DRAWER_WRAPPER).should('be.visible')
  })

  describe('Preview', () => {
    it('Should show a preview on click', () => {
      const firstPoint = { x: 500, y: 200 }
      const secondPoint = { x: 400, y: 400 }
      cy.visit('/')
      cy.window().its('App.$store').then($store => {
        $store.dispatch('poi/add', { name: 'A Super name !', pos: { x: 500, y: 200 } })

        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

        cy.get(i.CANVAS).click(secondPoint)
        cy.wait(100)

        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')

        cy.get(i.CANVAS).click(firstPoint)
        cy.wait(100)
        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')
      })
    })
    it('As a User I should be warned before deleting a POI', () => {
      const firstPoint = { x: 500, y: 200 }
      const secondPoint = { x: 400, y: 400 }
      cy.visit('/')
      cy.window().its('App.$store').then($store => {
        $store.dispatch('poi/add', { name: 'A Super name !', pos: { x: 500, y: 200 } })

        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

        cy.get(i.CANVAS).click(secondPoint)
        cy.wait(100)

        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('not.be.visible')

        cy.get(i.CANVAS).click(firstPoint)
        cy.wait(100)
        cy.get(i.PREVIEW_DRAWER_WRAPPER).should('be.visible')

        cy.get(i.PREVIEW_DRAWER_DELETE_BTN).should('be.visible').click()

        cy.get(i.DELETE_MODAL).should('be.visible')

        cy.get(i.DELETE_MODAL_NO_BTN).click()
        cy.get(i.DELETE_MODAL).should('not.be.visible')
        cy.get(i.PREVIEW_DRAWER_DELETE_BTN).should('be.visible').click()
        cy.get(i.DELETE_MODAL).should('be.visible')
      })
    })
  })
})
