<template>
  <div class="profile-wrap">
    <div class="profile" v-if="userInfo">
      <v-avatar-cell :userInfo="userInfo"></v-avatar-cell>
      <ul class="profile-list">
        <li>
          <router-link 
            to="" 
            :style="{height: listWidth + 'px', 'line-height': listWidth + 'px'}">
            我的主题
          </router-link>
        </li>
        <li>
          <router-link 
            to="" 
            :style="{height: listWidth + 'px', 'line-height': listWidth + 'px'}">
            我的回复
          </router-link>
        </li>
        <li>
          <router-link 
            to="" 
            :style="{height: listWidth + 'px', 'line-height': listWidth + 'px'}">
            未读消息
          </router-link>
          <span class="count">{{ unreadCount }}</span>
        </li>
        <li>
          <router-link 
            to="" 
            :style="{height: listWidth + 'px', 'line-height': listWidth + 'px'}">
            已读消息
          </router-link>
          <span class="count">{{ readCount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vAvatarCell from '@/components/vavatarCell'
  export default {
    name: 'me',
    components: { vAvatarCell },
    data () {
      return {
        listWidth: 0
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        loginInfo: 'loginInfo',
        unreadCount: 'unreadCount',
        readCount: 'readCount'
      })
    },
    methods: {
      resizeListWidth () {
        this.listWidth = document.body.clientWidth / 4
      }
    },
    created () {
      this.resizeListWidth()
      window.onresize = () => {
        this.resizeListWidth()
      }
      if (this.loginInfo.token) {
        this.$store.dispatch('userInfo', this.loginInfo.loginname)
        this.$store.dispatch('getUnreadCount', this.loginInfo.token)
        this.$store.dispatch('getMessage', this.loginInfo.token)
      } else {
        this.$store.commit('USERINFO_DATA', {})
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile-wrap {
    padding-top: 60px;
    .to-login {
      text-align: center;
      margin-top: 80px;
      a {
        display: block;
        text-decoration: none;
        font-size: 24px;
        color: #80bd01;
      }
    }
  }
  .profile-list {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    li {
      position: relative;
      float: left;
      margin-left: -1px;
      margin-top: -1px;
      width: 25%;
      text-align: center;
      border: 1px solid #f4f4f4;
      a {
        display: block;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #444;
      }
      .count {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #80bd01;
        background-color: #444;
      }
    }
  }
</style>
