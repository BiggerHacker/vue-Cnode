<template>
  <div class="read" v-if="messageInfo">
    <div 
      class="read-content" 
      v-if="messageInfo.has_read_messages.length"
      v-for="(message, index) in messageInfo.has_read_messages">
      <router-link :to="{name: 'user', params: {username: message.author.loginname}}">
        <div class="avatar">
          <img width="100%" height="100%" :src="message.author.avatar_url" alt="">
        </div>
      </router-link>
      <div class="content">
        <div class="name">
          <div class="text">{{ message.author.loginname }}</div>
          <div class="time">{{ message.reply.create_at | format }}</div>
        </div>
        <div class="desc">
          在话题
          <router-link :to="{name: 'detail', params: {id: message.topic.id}}">{{ message.topic.title }}</router-link>
          下@了你
        </div>
        <div class="msg" v-html="message.reply.content"></div>
      </div>
    </div>
    <v-none v-if="!messageInfo.has_read_messages.length" :icon="'icon-data-none'" :text="'空空哒'"></v-none>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vNone from '@/components/vnone'
  export default {
    name: 'read',
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

<style lang="scss">
  .read-content {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    .avatar {
      flex: 0 0 40px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
    }
    .content {
      position: relative;
      flex: 1;
      padding-left: 15px;
      overflow: hidden;
    }
    .name {
      overflow: hidden;
      width: 100%;
      .text {
        float: left;
        font-size: 16px;
        color: #444;
      }
      .time {
        float: right;
        font-size: 14px;
        color: #aaa;
      }
    }
    .desc {
      line-height: 25px;
      margin-top: 15px;
      color: #aaa;
      a {
        font-size: 18px;
        color: #80bd01;
      }
    }
    .msg {
      margin-top: 15px;
      color: #444;
      a {
        color: #444;
        text-decoration: none;
      }
      p {
        margin: 0;
      }
    }
  }
</style>
