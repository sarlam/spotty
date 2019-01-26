import _ from 'lodash'

const ID_PREFIX = 'poi_'

/**
 * check the consistency of the
 *
 * @param {Object} POI
 * @param {String} POI.name - name of the POI
 * @param {{x: Number, y: Number}} POI.pos - position of the POI
 * @return {boolean} is it a valid POI
 */
const checkPOIValidity =
  POI => (!_.isEmpty(POI.name) || POI.isCreation) &&
    (_.has(POI, '_id') || POI.isCreation) &&
    checkPosValidity(POI.pos)

const checkPosValidity = pos => !_.isUndefined(pos) &&
  _.has(pos, 'x') &&
  _.has(pos, 'y') &&
  _.isNumber(pos.x) &&
  _.isNumber(pos.y) &&
  pos.x >= 0 &&
  pos.y >= 0

/**
 * PLEASE REMEMBER THAT ACTIONS WILL BE EXECUTED BY THE MAIN PROCESS OF ELECTRON
 */
export default {

  create ({ dispatch }, pos) {
    if (!checkPosValidity(pos)) return

    const newPoint = {
      name: '',
      isCreation: true,
      pos
    }

    dispatch('putInEdition', newPoint)
  },

  putInEdition ({ commit }, item) {
    if (checkPOIValidity(item)) {
      commit('DESELECT_POI')
      commit('PUT_IN_EDITION', item)
    }
  },

  clearEdition ({ commit }) {
    commit('CLEAR_EDITION')
  },

  /**
   *
   * @param commit
   * @param {Object} item
   * @param {String} item.name
   * @param {{x: Number, y: Number}} item.pos
   */
  add ({ commit }, item) {
    const { name, pos } = item
    const storedItem = {
      _id: _.uniqueId(ID_PREFIX),
      name,
      pos
    }

    if (checkPOIValidity(storedItem)) {
      commit('ADD_A_POI', storedItem)
      commit('SELECT_A_POI', storedItem)
      commit('CLEAR_EDITION')
    }
  },

  /**
   * REMOVE_A_POI mutation accessor.
   *
   * @param commit
   * @param {String|{_id:String}} item - stored _id as an Object or String
   */
  delete ({ commit }, item) {
    commit('REMOVE_A_POI', item)
  },

  /**
   *
   * @param commit
   * @param {Object} item
   * @param {String} item._id
   * @param {String} item.name
   * @param {{x: Number, y: Number}} item.pos
   */
  update ({ commit }, item) {
    if (checkPOIValidity(item)) {
      commit('UPDATE_A_POI', item)
      commit('SELECT_A_POI', item)
      commit('CLEAR_EDITION')
    }
  },

  /**
   *
   * @param commit
   * @param {String|{_id:String}} item - stored _id as an Object or String
   */
  select ({ commit }, item) {
    commit('SELECT_A_POI', item)
  },

  /**
   * deselect.
   *
   * @param commit
   */
  deselect ({ commit }) {
    commit('DESELECT_POI')
  }
}
