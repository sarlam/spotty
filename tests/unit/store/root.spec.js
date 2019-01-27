import { expect } from 'chai'

import store from '@store'

/* eslint-disable no-unused-expressions */ // expect(...).to.be.true

describe('root store', () => {
  /**
   * As This soft was design to be used with vuex-electron primarily we test mostly actions
   */

  it('Should set the about modal', () => {
    expect(store.state.aboutModal).to.be.false

    store.dispatch('setAboutModal', true)

    expect(store.state.aboutModal).to.be.true
  })

  it('Should not show the deleting modal without a selected item', () => {
    expect(store.getters['poi/isAPoiSelected']).to.be.false
    expect(store.state.warningModal).to.be.false

    store.dispatch('setWarningModal', true)

    expect(store.state.warningModal).to.be.false

    store.dispatch('poi/add', {
      name: 'my super !',
      pos: {
        x: 25,
        y: 25
      }
    })

    expect(store.getters['poi/isAPoiSelected']).to.be.true
    store.dispatch('setWarningModal', true)

    expect(store.state.warningModal).to.be.true
  })

  describe('Stage Size', () => {
    it('Should set a stage size of 2000*1000', () => {
      expect(store.state.stage).to.deep.equal({ width: 0, height: 0 })

      store.dispatch('setStageSize', { width: 2000, height: 1000 })

      expect(store.state.stage).to.deep.equal({ width: 2000, height: 1000 })
    })

    // TODO : loading getter using map and stage size to know
    // TODO : prevent from mutations with negative stage size
  })

  it('Should cleanup the store before leaving the window', () => {
    expect(store.state.poi.itemInEdition).to.be.null

    store.dispatch('poi/create', {
      x: 25,
      y: 25
    })

    expect(store.getters['poi/isInEdition']).to.be.true

    store.dispatch('cleanBeforeClosed')

    expect(store.getters['poi/isInEdition']).to.be.false
  })
})
