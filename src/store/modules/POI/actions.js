import _ from 'lodash'

const ID_PREFIX = 'poi_'

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
    const { name, pos } = item

    if (!_.isEmpty(name) && !_.isUndefined(pos)) {
      const storedItem = {
        _id: _.uniqueId(ID_PREFIX),
        name,
        pos
      }

      commit('ADD_A_POI', storedItem)
    }
  }
}
