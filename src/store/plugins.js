const isElectron = process.env.VUE_APP_TARGET_ENV !== 'web'

const plugins = []

if (isElectron) {
  plugins.push(require('vuex-electron').createPersistedState())
  plugins.push(require('vuex-electron').createSharedMutations())
}

export default plugins
