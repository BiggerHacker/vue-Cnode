<template>
  <div class="notread" v-if="messageInfo">
    <v-none v-if="!messageInfo.hasnot_read_messages.length" :icon="'icon-data-none'" :text="'空空哒'"></v-none>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vNone from '@/components/vnone'
  export default {
    name: 'notread',
    components: { vNone },
    computed: {
      ...mapGetters({
        loginInfo: 'loginInfo',
        messageInfo: 'messageInfo'
      })
    },
    created () {
      if (this.loginInfo.token) {
        this.$store.dispatch('getMessage', this.loginInfo.token)
      } else {
        this.$store.commit('READ_MESSAGE', {})
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
