<template>
  <div class="create">
    <select v-model="sendType.tab" class="create-inp">
      <option value="">请选择发布类型</option>
      <option value="ask">问答</option>
      <option value="share">分享</option>
      <option value="job">招聘</option>
      <option value="dev">测试</option>
    </select>
    <input v-model="sendType.title" class="create-inp" type="text" placeholder="请输入标题">
    <textarea v-model="sendType.content" class="create-inp create-textarea" placeholder="请输入内容"></textarea>
    <button class="create-btn" @click="submit">提交</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import tip from '../util/tip'
  import api from '../api/api'
  export default {
    name: 'create',
    data () {
      return {
        sendType: {
          title: '',
          tab: '',
          content: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        loginInfo: 'loginInfo'
      })
    },
    methods: {
      submit () {
        if (this.loginInfo.token === undefined) {
          tip.tip('请先登录')
          return
        }
        if (!this.sendType.tab) {
          return tip.tip('请选择发布类型')
        } else if (!this.sendType.title) {
          return tip.tip('请输入标题')
        } else if (!this.sendType.content) {
          return tip.tip('请输入内容')
        }
        api.PostSub(`/topics/?accesstoken=${this.loginInfo.token}&title=${this.sendType.title}&tab=${this.sendType.tab}&content=${this.sendType.content}`).then(res => {
          if (res.success) {
            this.$router.push(`detail/${res.topic_id}`)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .create {
    padding: 15px;
  }
  .create-inp {
    padding: 15px 15px;
    margin-bottom: 15px;
    width: 100%;
    outline: none;
    resize: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    color: #472813;
    font-size: 16px;
  }
  .create-textarea {
    height: 300px;
  }
  .create-btn {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 0;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: #80bd01;
    color: #fff;
  }
</style>
