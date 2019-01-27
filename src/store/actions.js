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
  },

  /**
   *
   * @param commit
   * @param getters
   * @param {Boolean} isItOpen
   */
  setWarningModal ({ commit, getters }, isItOpen) {
    if (getters['poi/isAPoiSelected']) {
      commit('SET_WARNING_MODAL', isItOpen)
    }
  },

  /**
   * called by the main process just before destroying the main window.
   * clean up the store before storing it for the next application use.
   *
   * @param commit
   */
  cleanBeforeClosed ({ commit }) {
    commit('poi/CLEAR_EDITION')
  }
}
