import Vue from 'vue'
import Vuex from 'vuex'

const isE2E = process.env.VUE_APP_TARGET_ENV === 'web'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  plugins: !isE2E
    ? [
      require('vuex-electron').createPersistedState(),
      require('vuex-electron').createSharedMutations()
    ]
    : []
})
