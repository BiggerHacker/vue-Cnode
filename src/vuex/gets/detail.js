import * as types from '../types'
import api from '../../api/api'

const state = {
  detailData: ''
}

const getters = {
  detailData: state => state.detailData
}

const actions = {
  detailData ({commit}, id) {
    commit(types.MODULE_LOADING, true)
    api.getResourseList(`/topic/${id}`).then(res => {
      commit(types.DETAIL_DATA, res)
      commit(types.MODULE_LOADING, false)
    })
  }
}

const mutations = {
  [types.DETAIL_DATA] (state, res) {
    state.detailData = res.data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
