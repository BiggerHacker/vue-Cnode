<template>
  <div class="about">
    <div class="about-head">
      <img class="avatar" src="../assets/images/avatar.jpg" alt="">
      <p class="avatar-text">BiggerHacker</p>
    </div>
    <div class="about-body">
      <div class="item">
        <h2 class="title">关于项目</h2>
        <p class="content">
          感谢cnode社区提供的API，基于vue-cli脚手架工具，采用vue+vuex+vue-router+axios+scss等技术栈以及ES6语法开发。实现重写cnode社区的webapp版本。
        </p>
      </div>
      <div class="item">
        <h2 class="title">github</h2>
        <p class="content">
          <a href="https://github.com/BiggerHacker/vue-Cnode" target="_blank">https://github.com/BiggerHacker/vue-Cnode</a>
        </p>
      </div>
      <div class="item">
        <h2 class="title">联系邮箱</h2>
        <p class="content">
          <a href="mailto:biggerhacker1@gmail.com">biggerhacker1@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style lang="scss" scoped>
  .about-head {
    margin-top: -1px;
    padding-top: 1px;
    width: 100%;
    height: 150px;
    background-color: #444;
    .avatar {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto;
    }
    .avatar-text {
      margin: 20px 0 0;
      line-height: 100%;
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
  }
  .about-body {
    padding: 15px;
    .item {
      margin-bottom: 15px;
    }
    .title {
      margin: 0;
      line-height: 100%;
      font-weight: normal;
    }
    .content {
      margin: 15px 0 0;
      line-height: 24px;
      text-indent: 28px;
      text-align: justify;
      font-size: 14px;
      a {
        color: #80bd01;
      }
    }
  }
</style>
