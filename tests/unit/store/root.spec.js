import { expect } from 'chai'

import store from '@store'

/* eslint-disable no-unused-expressions */ // expect(...).to.be.true

describe('root store', () => {
  /**
   * As This soft was design to be used with vuex-electron primarily we test mostly actions
   */

  it('Should set modal', () => {
    expect(store.state.aboutModal).to.be.false

    store.dispatch('setAboutModal', true)

    expect(store.state.aboutModal).to.be.true
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
})
