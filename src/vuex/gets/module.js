import * as types from '../types'

const state = {
  isNav: false,
  loading: true
}

const getters = {
  isNav: state => state.isNav,
  loading: state => state.loading
}

const mutations = {
  [types.MODULE_NAV] (state, type) {
    state.isNav = type
  },
  [types.MODULE_LOADING] (state, bool) {
    state.loading = bool
  }
}

export default {
  state,
  getters,
  mutations
}
