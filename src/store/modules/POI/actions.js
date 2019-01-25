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
  POI => !_.isEmpty(POI.name) &&
    !_.isUndefined(POI.pos) &&
    _.has(POI.pos, 'x') &&
    _.has(POI.pos, 'y') &&
    POI.pos.x >= 0 &&
    POI.pos.y >= 0

/**
 * PLEASE REMEMBER THAT ACTIONS WILL BE EXECUTED BY THE MAIN PROCESS OF ELECTRON
 */
export default {

  /**
   *
   * @param commit
   * @param {Object} item
   * @param {String} item.name
   * @param {{x: Number, y: Number}} item.pos
   */
  add ({ commit }, item) {
    if (checkPOIValidity(item)) {
      const { name, pos } = item
      const storedItem = {
        _id: _.uniqueId(ID_PREFIX),
        name,
        pos
      }

      commit('ADD_A_POI', storedItem)
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
    if (checkPOIValidity(item)) commit('UPDATE_A_POI', item)
  }
}
