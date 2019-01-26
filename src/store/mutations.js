/**
 * DO NOT USE MUTATIONS FROM THE RENDERER WHEN USING ELECTRON, PLEASE USE ACTIONS INSTEAD
 * @see vuex-electron
 */
export default {
  /**
   * store stage size
   *
   * @param {Object} [state]
   * @param {Number} width - stage width
   * @param {Number} height - stage height
   */
  SET_STAGE_SIZE: (state, { width, height }) => {
    state.stage.width = width
    state.stage.height = height
  },

  /**
   *
   * @param state
   * @param {Boolean} isItOpen
   */
  SET_ABOUT_MODAL: (state, isItOpen) => {
    state.aboutModal = isItOpen
  }
}
