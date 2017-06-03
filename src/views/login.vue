<template>
  <div class="login">
    <input class="search-inp" type="text" placeholder="请输入token" v-model="token">
    <div class="button" @click="login">登录</div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import api from '../api/api'
  import tip from '../util/tip'
  export default {
    name: 'login',
    data () {
      return {
        token: ''
      }
    },
    computed: {
      ...mapGetters({
        loginInfo: 'loginInfo'
      })
    },
    methods: {
      ...mapActions({
        storageUserInfo: 'storageUserInfo'
      }),
      login () {
        if (this.token.length === 0 || this.token.length !== 36) {
          tip.tip('token输入错误')
          return
        }
        api.PostSub(`/accesstoken/?accesstoken=${this.token}`).then(res => {
          if (res.success) {
            let userInfo = Object.assign({token: this.token}, res)
            this.storageUserInfo(userInfo)
            this.$router.go(-1)
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created () {
      if (this.loginInfo.token) {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    padding: 15px 15px 15px;
  }
  .search-inp {
    padding: 0 5px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    outline: none;
    border: 0;
    border-bottom: 1px solid #80bd01;
    font-size: 18px;
  }
  .button {
    margin-top: 15px;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #444;
    color: #fff;
  }
</style>
