import Vue from 'vue'
import Vuex from 'vuex'

import module from './gets/module'
import topics from './gets/topics'
import detail from './gets/detail'
import user from './gets/user'
import login from './gets/login'
import message from './gets/message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    module,
    topics,
    detail,
    user,
    login,
    message
  }
})
