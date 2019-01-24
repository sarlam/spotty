export default {
  SET_IMAGE_SIZE: (state, { width, height }) => {
    state.size.width = width
    state.size.height = height
  }
}
