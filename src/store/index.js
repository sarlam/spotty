import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

import map from './modules/map'
import poi from './modules/POI'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins,
  modules: {
    map,
    poi
  }
})
