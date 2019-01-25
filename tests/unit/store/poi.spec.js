import { expect } from 'chai'

import store from '@store'

const ADD_ACTION = 'poi/add'
const DELETE_ACTION = 'poi/delete'

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

    store.dispatch(ADD_ACTION, poiToAdd)

    expect(store.state.poi.list).to.have.length(1)
    expect(store.state.poi.list[0]._id).to.exist
    expect(store.state.poi.list[0].name).to.equal(poiToAdd.name)
    expect(store.state.poi.list[0].pos).to.deep.equal(poiToAdd.pos)
  })

  it('Should not push an incomplete item in the store', () => {
    expect(store.state.poi.list).to.have.length(1)
    const emptyName = {
      name: '',
      pos: {
        x: 1,
        y: 1
      }
    }

    store.dispatch(ADD_ACTION, emptyName)
    expect(store.state.poi.list).to.have.length(1)

    delete emptyName.name
    store.dispatch(ADD_ACTION, emptyName)
    expect(store.state.poi.list).to.have.length(1)

    emptyName.name = 'test'
    delete emptyName.pos
    store.dispatch(ADD_ACTION, emptyName)
    expect(store.state.poi.list).to.have.length(1)

    emptyName.pos = {x : 1 } // no y
    store.dispatch(ADD_ACTION, emptyName)
    expect(store.state.poi.list).to.have.length(1)

  })

  it('Should not be able to push an item from the mutation', () => {
    expect(store.state.poi.list).to.have.length(1)

    store.commit('poi/ADD_A_POI', {
      name: 'test',
      pos: {
        x: 0,
        y: 0
      }
    })
    expect(store.state.poi.list).to.have.length(1)

    store.commit('poi/ADD_A_POI', store.state.poi.list[0])
    expect(store.state.poi.list).to.have.length(1)
  })

  it('Should remove the previous registered POI', () => {
    expect(store.state.poi.list).to.have.length(1)
    store.dispatch(DELETE_ACTION, store.state.poi.list[0])
    expect(store.state.poi.list).to.have.length(0)

    store.dispatch(ADD_ACTION, {
      name: 'test',
      pos: {
        x: 0,
        y: 0
      }
    })

    expect(store.state.poi.list).to.have.length(1)

    store.dispatch(DELETE_ACTION, store.state.poi.list[0]._id)
    expect(store.state.poi.list).to.have.length(0)


    store.dispatch(ADD_ACTION, {
      name: 'test',
      pos: {
        x: 0,
        y: 0
      }
    })
    expect(store.state.poi.list).to.have.length(1)

    store.dispatch(DELETE_ACTION, {_id: 'test'})
    expect(store.state.poi.list).to.have.length(1)
    store.dispatch(DELETE_ACTION, 'test')
    expect(store.state.poi.list).to.have.length(1)
    store.dispatch(DELETE_ACTION, null)
    expect(store.state.poi.list).to.have.length(1)
  })
})
