<template>
  <div class="data-none">
    <i class="iconfont" :class="icon"></i>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
  export default {
    name: 'none',
    props: ['icon', 'text']
  }
</script>

<style lang="scss" scoped>
  .data-none {
    text-align: center;
    padding: 30px 0;
    .iconfont {
      font-size: 100px;
    }
    .text {
      margin-top: 30px;
      font-size: 24px;
    }
  }
</style>
