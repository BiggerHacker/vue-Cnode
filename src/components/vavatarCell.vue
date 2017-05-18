<template>
  <div class="user-head">
    <div class="avatar">
      <img width="100%" height="100%" :src="userInfo.avatar_url" alt="">
    </div>
    <div class="user-info">
      <div class="info">用户名：<span>{{ userInfo.loginname }}</span></div>
      <div class="info">注册时间：<span>{{ userInfo.create_at | format }}</span></div>
      <div class="info">积分：<span>{{ userInfo.score }}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'avatar-cell',
    props: ['userInfo']
  }
</script>

<style lang="scss" scoped>
  .user-head {
    display: flex;
    width: 100%;
    padding: 15px;
    margin-top: -1px;
    background-color: #444;
    .avatar {
      width: 88px;
      height: 88px;
      margin-right: 15px;
      img {
        border-radius: 50%;
      }
    }
    .user-info {
      flex: 1;
      color: #ddd;
      font-size: 18px;
      .info {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
        span {
          color: #80bd01;
        }
      }
    }
  }
</style>
