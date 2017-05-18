import api from '../../api/api'
import * as types from '../types'

const state = {
  userInfo: '',
  userTabs: '',
  showUserTab: 'topic'
}

const getters = {
  userInfo: state => state.userInfo,
  userTabs: state => state.userTabs,
  showUserTab: state => state.showUserTab
}

const actions = {
  userInfo ({commit}, username) {
    commit(types.MODULE_LOADING, true)
    api.getResourseList(`/user/${username}`).then(res => {
      commit(types.MODULE_LOADING, false)
      commit(types.USERINFO_DATA, res)
      commit(types.USERTABS_DATA, res.data)
    })
  }
}

const mutations = {
  [types.USERINFO_DATA] (state, res) {
    state.userInfo = res.data
  },
  [types.USERTAB_NAME] (state, tabName) {
    state.showUserTab = tabName
  },
  [types.USERTABS_DATA] (state, res) {
    switch (state.showUserTab) {
      case 'topic':
        state.userTabs = res.recent_topics
        break
      case 'replies':
        state.userTabs = res.recent_replies
        break
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
