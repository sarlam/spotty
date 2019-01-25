/**
 * PLEASE REMEMBER THAT ACTIONS WILL BE EXECUTED BY THE MAIN PROCESS OF ELECTRON
 */
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
  }
}
