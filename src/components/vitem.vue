<template>
  <div class="v-item">
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
</template>

<script>
  export default {
    name: 'item',
    props: ['userTabs']
  }
</script>

<style lang="scss" scoped>
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
