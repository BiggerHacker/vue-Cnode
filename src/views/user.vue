<template>
  <div class="user">
    <div class="user-wrap" v-if="userInfo" v-show="!loading">
      <v-avatar-cell :userInfo="userInfo"></v-avatar-cell>
      <div class="user-tab">
        <ul class="tabs">
          <li :class="{'active': showUserTab === 'topic'}" @click="toggleTab('topic')">主题</li>
          <li :class="{'active': showUserTab === 'replies'}" @click="toggleTab('replies')">回复</li>
        </ul>
        <v-item :userTabs="userTabs"></v-item>
      </div>
    </div>
    <div v-show="loading">
      <v-loading :vStyle="{margin: '15px auto'}"></v-loading>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vAvatarCell from '@/components/vavatarCell'
  import vLoading from '@/components/vloading'
  import vItem from '@/components/vitem'
  export default {
    name: 'user',
    components: { vLoading, vAvatarCell, vItem },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        loading: 'loading',
        showUserTab: 'showUserTab',
        userTabs: 'userTabs'
      })
    },
    methods: {
      toggleTab (tabName) {
        this.$store.commit('USERTAB_NAME', tabName)
        this.$store.commit('USERTABS_DATA', this.userInfo)
      }
    },
    created () {
      this.$store.dispatch('userInfo', this.$route.params.username)
    }
  }
</script>

<style lang="scss" scoped>
  .user-tab {
    width: 100%;
    .tabs {
      margin: 0 0 0 1px;
      padding: 0;
      list-style: none;
      width: 100%;
      text-align: center;
      overflow: hidden;
      li {
        margin-left: -1px;
        float: left;
        width: 50%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        font-size: 14px;
        &.active {
          color: #80bd01;
        }
      }
    }
  }
</style>
