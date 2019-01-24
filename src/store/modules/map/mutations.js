export default {
  /**
   * set image size in the store.
   *
   * @param state
   * @param {Number} width - the loaded image width
   * @param [Number} height - the loaded image height
   */
  SET_IMAGE_SIZE: (state, { width, height }) => {
    state.size.width = width
    state.size.height = height
  },
  /**
   * set the dragging state.
   *
   * @param state
   * @param {Boolean} isDragging - is the user dragging the stage ?
   */
  SET_DRAGGING: (state, isDragging) => {
    state.isDragging = isDragging
  }
}
