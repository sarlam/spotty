import { isEmpty } from 'lodash'

export default {
  isAPoiSelected: (state) => {
    // isEmpty include isNull && isUndefined
    return !isEmpty(state.selectedPoi)
  }
}
