import { expect } from 'chai'

import store from '@store'

/* eslint-disable no-unused-expressions */ // expect(...).to.be.true

describe('POI store module', () => {
  it('should have loaded POI Module store', () => {
    expect(store.state.poi).to.be.an.instanceOf(Object)
  })
})
