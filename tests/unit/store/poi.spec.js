import { expect } from 'chai'

import store from '@store'

/* eslint-disable no-unused-expressions */ // expect(...).to.be.true

describe('POI store module', () => {
  it('should have loaded POI Module store', () => {
    expect(store.state.poi).to.be.an.instanceOf(Object)
    expect(store.state.poi.list).to.be.an.instanceOf(Array)
    expect(store.state.poi.list).to.have.length(0)
  })

  it('Should push a new POI in the store', () => {
    const poiToAdd = {
      name: 'dummypoint',
      pos: {
        x: 100,
        y: 50
      }
    }

    store.dispatch('poi/add', poiToAdd)

    expect(store.state.poi.list).to.have.length(1)
    expect(store.state.poi.list[0]._id).to.exist
    expect(store.state.poi.list[0].name).to.equal(poiToAdd.name)
    expect(store.state.poi.list[0].pos).to.deep.equal(poiToAdd.pos)
  })
})
