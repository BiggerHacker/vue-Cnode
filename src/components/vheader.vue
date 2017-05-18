<template>
  <div class="header" :class="{'header-slide': isNav}">
    <i class="iconfont icon-menu" @click="isMenu" v-if="icon"></i>
    <i class="iconfont icon-back" @click="back" v-if="!icon"></i>
    <div class="logo">
      <a href="#/home">
        <img src="../assets/images/cnodejs_light.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'header',
    props: ['icon'],
    computed: {
      ...mapGetters({
        isNav: 'isNav'
      })
    },
    methods: {
      isMenu () {
        this.$store.commit('MODULE_NAV', true)
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    padding: 15px 0;
    background-color: #444;
    transition: all .18s ease-in;
    &.header-slide {
      transform: translateX(40%);
    }
  }
  .iconfont {
    position: absolute;
    top: 18px;
    left: 15px;
    font-size: 24px;
    color: #fff;
  }
  .logo {
    width: 120px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
</style>
