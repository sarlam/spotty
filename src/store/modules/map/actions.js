/**
 * PLEASE REMEMBER THAT ACTIONS WILL BE EXECUTED BY THE MAIN PROCESS OF ELECTRON
 */
import _ from 'lodash'

const isValidAbsolutePosition = (pos) => {
  return _.has(pos, 'x') &&
    _.has(pos, 'y') &&
    pos.x < 1 &&
    pos.y < 1
}

export default {
  /**
   *
   * @param commit
   * @param {Object} size - image size
   * @param {Number} size.width -image width
   * @param {Number} size.height -image height
   */
  afterImageLoad: ({ commit }, size) => {
    commit('SET_IMAGE_SIZE', size)
  },

  /**
   *
   * @param commit
   * @param {Boolean} isDragging - is the user dragging ?
   */
  setDragging: ({ commit }, isDragging) => {
    commit('SET_DRAGGING', isDragging)
  },

  setAbsolute: ({ commit }, position) => {
    if (isValidAbsolutePosition(position)) {
      commit('SET_ABSOLUTE', position)
    }
  }
}
