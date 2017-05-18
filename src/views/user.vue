<template>
  <div class="user">
    <div class="user-wrap" v-if="userInfo" v-show="!loading">
      <v-avatar-cell :userInfo="userInfo"></v-avatar-cell>
      <div class="user-tab">
        <ul class="tabs">
          <li :class="{'active': showUserTab === 'topic'}" @click="toggleTab('topic')">主题</li>
          <li :class="{'active': showUserTab === 'replies'}" @click="toggleTab('replies')">回复</li>
        </ul>
        <div class="tab-content" v-for="(usertab, index) in userTabs">
          <router-link class="tab-content-link" :to="{name: 'detail', params: {id: usertab.id}}">
            <div class="avatar">
              <img width="100%" height="100%" :src="usertab.author.avatar_url" alt="">
            </div>
            <div class="info">
              <div class="name">{{ usertab.author.loginname }}</div>
              <div class="title">{{ usertab.title }}</div>
              <div class="time">{{ usertab.last_reply_at | format }}</div>
            </div>
          </router-link>
        </div>
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
  export default {
    name: 'user',
    components: { vLoading, vAvatarCell },
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
  .user {
    padding-top: 60px;
  }
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
  .tab-content {
    width: 100%;
    .tab-content-link {
      display: flex;
      padding: 15px;
      border-bottom: 1px solid #f0f0f0;
      text-decoration: none;
      color: #444;
    }
    .avatar {
      width: 44px;
      height: 44px;
      margin-right: 15px;
      img {
        border-radius: 50%;
      }
    }
    .info {
      position: relative;
      flex: 1;
      font-size: 14px;
      color: #444;
      .name {
        margin-bottom: 15px;
      }
      .time {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
</style>
