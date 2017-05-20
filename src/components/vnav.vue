<template>
  <div class="nav-wrap">
    <div class="nav-links" :class="{'nav-none': !isNav}">
      <div class="logo">
        <img class="thrum" src="../assets/images/cnodejs_logo.jpg" alt="">
        <p class="text">node技术交流社区</p>
      </div>
      <ul class="nav">
        <li v-for="(item, index) in items">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
        <li v-if="!loginStatus">
          <router-link to="/login">登录</router-link>
        </li>
        <li v-if="loginStatus" @click="siginOut">
          <a>
            退出
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-shadow" @click="hideNav" v-show="isNav"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'nav',
    data () {
      return {
        items: [
          {
            name: '首页',
            link: '/home'
          },
          {
            name: '发布',
            link: '/create'
          },
          {
            name: '个人',
            link: '/profile'
          },
          {
            name: '关于',
            link: '/about'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        isNav: 'isNav',
        loginStatus: 'loginStatus'
      })
    },
    methods: {
      ...mapActions({
        storageSiginOut: 'storageSiginOut'
      }),
      hideNav () {
        this.$store.commit('MODULE_NAV', false)
      },
      siginOut () {
        this.hideNav()
        this.storageSiginOut()
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-links {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    width: 40%;
    height: 100%;
    background-color: #444;
    transition: all .18s ease-in;
    &.nav-none {
      transform: translateX(-100%);
    }
  }
  .nav-shadow {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 125;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
  }
  .logo {
    padding-top: 15px;
    text-align: center;
    .thrum {
      width: 80px;
      border-radius: 50%;
    }
    .text {
      margin: 0;
      padding: 15px 0;
      color: #fff;
      font-size: 14px;
    }
  }
  .nav {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      text-align: center;
    }
    a {
      display: block;
      padding: 0.8rem;
      text-decoration: none;
      transition: all .18s ease-in;
      font-size: 16px;
      color: #fff;
      &.active {
        color: #ed2316;
      }
    }
  }
</style>
