import * as types from '../types'
import api from '../../api/api'

const state = {
  items: [
    {
      title: '全部',
      param: 'all'
    },
    {
      title: '精华',
      param: 'good'
    },
    {
      title: '分享',
      param: 'share'
    },
    {
      title: '问答',
      param: 'ask'
    },
    {
      title: '招聘',
      param: 'job'
    }
  ],
  itemIndex: 0,
  topicsData: [],
  topicsKey: {
    page: 0,
    limit: 20
  },
  scroll: true
}

const getters = {
  items: state => state.items,
  itemIndex: state => state.itemIndex,
  topicsData: state => state.topicsData
}

const actions = {
  topicsData ({commit}) {
    if (state.scroll) {
      commit(types.MODULE_SCROLL, false)
      commit(types.PAGE_NUM)
      commit(types.MODULE_LOADING, true)
      api.getResourseList(
        `/topics/?page=${state.topicsKey.page}&limit=${state.topicsKey.limit}&tab=${state.items[state.itemIndex].param}`
        )
      .then(res => {
        commit(types.MODULE_SCROLL, true)
        commit(types.TOPICS_DATA, res)
        commit(types.MODULE_LOADING, false)
      })
    }
  }
}

const mutations = {
  [types.TOPICS_DATA] (state, res) {
    if (state.topicsKey.page <= 1) {
      state.topicsData = res.data
    } else {
      state.topicsData = state.topicsData.concat(res.data)
    }
  },
  [types.ITEMS_INDEX] (state, index) {
    state.itemIndex = index
  },
  [types.PAGE_NUM] (state) {
    state.topicsKey['page'] += 1
  },
  [types.TOPICS_KEY] (state, param) {
    state.topicsKey = param
  },
  [types.MODULE_SCROLL] (state, bool) {
    state.scroll = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
