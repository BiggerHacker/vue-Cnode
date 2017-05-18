import * as types from '../types'

const state = {
  loginInfo: JSON.parse(localStorage.getItem('info')) || {},
  loginStatus: JSON.parse(localStorage.getItem('state')) || false
}

const getters = {
  loginInfo: state => state.loginInfo,
  loginStatus: state => state.loginStatus
}

const actions = {
  storageUserInfo ({commit}, res) {
    localStorage.setItem('info', JSON.stringify(res))
    localStorage.setItem('state', true)
    commit(types.LOGIN_RESULT, res)
    commit(types.LOGIN_STATUS, true)
  },
  storageSiginOut ({commit}) {
    localStorage.removeItem('info')
    localStorage.removeItem('state')
    commit(types.LOGIN_RESULT, {})
    commit(types.LOGIN_STATUS, false)
  }
}

const mutations = {
  [types.LOGIN_RESULT] (state, res) {
    state.loginInfo = res
  },
  [types.LOGIN_STATUS] (state, bool) {
    state.loginStatus = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
