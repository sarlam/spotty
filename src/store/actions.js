/**
 * PLEASE REMEMBER THAT ACTIONS WILL BE EXECUTED BY THE MAIN PROCESS OF ELECTRON
 */
export default {
  /**
   * Mutations accessor.
   *
   * @param commit
   * @param {Number} width - stage width
   * @param {Number} height - stage height
   */
  setStageSize ({ commit }, { width, height }) {
    commit('SET_STAGE_SIZE', { width, height })
  },

  /**
   *
   * @param commit
   * @param {Boolean} isItOpen
   */
  setAboutModal ({ commit }, isItOpen) {
    commit('SET_ABOUT_MODAL', isItOpen)
  }
}
