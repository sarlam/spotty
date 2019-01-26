import { isEmpty } from 'lodash'

export default {
  isAPoiSelected: (state) => {
    // isEmpty include isNull && isUndefined
    return !isEmpty(state.selectedPoi)
  },
  konvaPoints: (state) => {
    return state.list.map(p => {
      return {
        key: p._id,
        ...p.pos,
        radius: 10,
        fill: 'red'
      }
    })
  },
  isInEdition: (state) => {
    // isEmpty include isNull && isUndefined
    return !isEmpty(state.itemInEdition)
  }
}
