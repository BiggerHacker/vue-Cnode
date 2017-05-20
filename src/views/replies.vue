<template>
  <div class="replies">
    <v-item v-if="userInfo.recent_replies.length > 0" :userTabs="userInfo.recent_replies"></v-item>
    <div class="data-none" v-if="userInfo.recent_replies.length === 0">
      <i class="iconfont icon-data-none"></i>
      <div class="text">空空哒</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vItem from '@/components/vitem'
  export default {
    name: 'replies',
    components: { vItem },
    computed: {
      ...mapGetters({
        loginInfo: 'loginInfo',
        userInfo: 'userInfo'
      })
    },
    created () {
      if (this.loginInfo.token) {
        this.$store.dispatch('userInfo', this.loginInfo.loginname)
      } else {
        this.$store.commit('USERINFO_DATA', {})
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .data-none {
    text-align: center;
    padding: 30px 0;
    .iconfont {
      font-size: 100px;
    }
    .text {
      margin-top: 30px;
      font-size: 24px;
    }
  }
</style>
