<template>
  <div class="profile-topic" v-if="userInfo">
    <v-item 
      v-if="userInfo.recent_topics.length" 
      :userTabs="userInfo.recent_topics">
    </v-item>
    <v-none 
      v-if="!userInfo.recent_topics.length" 
      :icon="'icon-data-none'" 
      :text="'空空哒'">
    </v-none>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vItem from '@/components/vitem'
  import vNone from '@/components/vnone'
  export default {
    name: 'topic',
    components: { vItem, vNone },
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

</style>
