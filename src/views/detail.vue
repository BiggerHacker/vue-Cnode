<template>
  <div class="detail">
    <div class="detail-wrap" v-if="detail" v-show="!loading">
      <div class="detail-head">
        <div class="avatar">
          <router-link :to="{name: 'user', params: {username: detail.author.loginname}}">
            <img :src="detail.author.avatar_url" alt="">
          </router-link>
        </div>
        <div class="info">
          <div class="name">{{ detail.author.loginname }}</div>
          <div class="type" v-if="detail.tab === 'share'">#分享#</div>
          <div class="type" v-if="detail.tab === 'ask'">#问答#</div>
          <div class="type" v-if="detail.tab === 'job'">#招聘#</div>
          <div class="type" v-if="detail.tab === 'good'">#精华#</div>
          <div class="time">楼主 发布于{{detail.create_at | format}}</div>
          <div class="star">收藏</div>
        </div>
      </div>
      <div class="detail-body">
        <h2 class="title">{{ detail.title }}</h2>
        <div class="content" v-html="detail.content"></div>
      </div>
      <div class="detail-comment">
        <div class="title" v-if="detail.replies.length > 0">评论</div>
        <div class="no-title" v-if="detail.replies.length === 0">暂无评论</div>
        <ul class="comment-list">
          <li v-for="(comment, index) in detail.replies">
            <div class="avatar">
              <router-link :to="{name: 'user', params: {username: comment.author.loginname}}">
                <img :src="comment.author.avatar_url" alt="">
              </router-link>
            </div>
            <div class="info">
              <div class="name">{{ comment.author.loginname }}</div>
              <div class="time">{{ index+1 }}楼 发表于{{ comment.create_at | format }}</div>
              <div class="cell" v-html="comment.content"></div>
              <div class="praise">
                <i class="iconfont icon-praise"></i>
                <span class="count" v-if="comment.ups.length > 0">{{ comment.ups.length }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="loading">
      <v-loading :vStyle="{margin: '15px auto'}"></v-loading>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vLoading from '@/components/vloading'
  export default {
    name: 'detail',
    components: {
      vLoading
    },
    computed: {
      ...mapGetters({
        detail: 'detailData',
        loading: 'loading'
      })
    },
    created () {
      this.$store.dispatch('detailData', this.$route.params.id)
    }
  }
</script>

<style lang="scss">
  .detail {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .detail-wrap {
    width: 100%;
    background-color: #eee;
  }
  .detail-head {
    display: flex;
    padding: 15px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    .avatar {
      width: 44px;
      height: 44px;
      margin-right: 15px;
      a {
        display: block;
      }
      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }
    }
    .info {
      position: relative;
      flex: 1;
      .name {
        font-size: 14px;
        color: #444;
      }
      .type {
        font-size: 14px;
        color: #80bd01;
      }
      .time {
        font-size: 14px;
        color: #444;
      }
      .star {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        padding: 5px 15px;
        background-color: #80bd01;
        color: #fff;
      }
    }
  }
  .detail-body {
    padding: 15px;
    background-color: #fff;
    .title {
      margin: 0;
      font-size: 16px;
    }
    .content {
      margin-top: 30px;
      font-size: 14px;
      color: #444;
      word-wrap: break-word;
      img {
        width: 100%;
        margin: 15px 0;
      }
      table {
        display: block;
        width: 100%;
        overflow: auto;
        word-break: keep-all;
      }
    }
  }
  .detail-comment {
    margin-top: 15px;
    background-color: #fff;
    .title,
    .no-title {
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      color: #80bd01;
    }
    .no-title {
      color: #444;
    }
  }
  .comment-list {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      margin: 0 15px;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      overflow: hidden;
    }
    .avatar {
      width: 44px;
      height: 44px;
      margin-right: 15px;
      a {
        display: block;
      }
      img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }
    }
    .info {
      flex: 1;
      position: relative;
      img {
        width: 100%;
        margin: 15px 0;
      }
      .name,
      .cell {
        font-size: 14px;
        color: #444;
      }
      .time {
        margin-top: 5px;
        font-size: 12px;
        color: #666;
      }
      .cell {
        margin-top: 10px;
        word-wrap: break-word;
        p {
          margin: 0;
        }
      }
      .praise {
        position: absolute;
        right: -15px;
        top: -15px;
        padding: 15px;
        font-size: 18px;
        color: #444;
      }
      .iconfont {
        vertical-align: middle;
        font-size: 20px;
      }
      .count {
        vertical-align: middle;
      }
    }
  }
</style>
