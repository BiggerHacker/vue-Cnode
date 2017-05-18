import api from '../../api/api'
import * as types from '../types'

const state = {
  unreadCount: 0,
  readCount: 0
}

const getters = {
  unreadCount: state => state.unreadCount,
  readCount: state => state.readCount
}

const actions = {
  getUnreadCount ({commit}, token) {
    api.getResourseList(`/message/count/?accesstoken=${token}`).then(res => {
      commit(types.UNREAD_MESSAGE, res)
    })
  },
  getMessage ({commit}, token) {
    api.getResourseList(`/messages/?accesstoken=${token}`).then(res => {
      commit(types.READ_MESSAGE, res)
    })
  }
}

const mutations = {
  [types.UNREAD_MESSAGE] (state, res) {
    state.unreadCount = res.data
  },
  [types.READ_MESSAGE] (state, res) {
    state.readCount = res.data.has_read_messages.length
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
