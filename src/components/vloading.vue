<template>
  <div class="loading" :style="vStyle"></div>
</template>

<script>
  export default {
    name: 'loading',
    props: ['vStyle']
  }
</script>

<style lang="scss">
  .loading {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: loading 1.18s infinite linear;
    border: 4px solid #80bd01;
    border-left: 4px solid transparent;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
