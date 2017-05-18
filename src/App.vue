<template>
  <div id="app">
    <v-header :icon="icon"></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from '@/components/vheader'
  import vNav from '@/components/vnav'
  export default {
    name: 'app',
    data () {
      return {
        icon: true
      }
    },
    components: {
      vHeader,
      vNav
    },
    created () {
      this.iconType()
    },
    watch: {
      '$route': 'iconType'
    },
    methods: {
      iconType () {
        switch (this.$route.name) {
          case 'detail':
            this.icon = false
            break
          case 'home':
            this.icon = true
            this.$store.commit('MODULE_NAV', false)
            this.$store.commit('TOPICS_KEY', {page: 0, limit: 20})
            this.$store.dispatch('topicsData')
            break
          default:
            this.icon = true
            this.$store.commit('MODULE_NAV', false)
        }
        window.scroll(0, 0)
      }
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color:transparent;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .tip {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 5px 20px;
    border-radius: 4px;
    background-color: #444;
    color: #fff;
  }
  .tip-show {
    animation: tipTo ease-in .18s;
  }
  .tip-hide {
    animation: tipOut ease-in .18s;
  }
  @keyframes tipTo {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes tipOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
