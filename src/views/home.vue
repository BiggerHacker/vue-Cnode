<template>
  <div class="topics">
    <ul class="menu-list" :class="{'menu-list-slide': isNav}">
      <li v-for="(item, index) in items" :class="{active: itemIndex === index}" @click="getTopics(index)">
        {{ item.title }}
      </li>
    </ul>
    <div class="topic-wrap">
      <div class="topic-item" v-for="(topic, index) in topics" v-if="topic">
        <router-link :to="{name: 'detail', params:{id: topic.id} }">
          <div class="info-wrap">
            <img class="avatar" :src="topic.author.avatar_url" alt="">
            <div class="info">
              <div class="time">{{ topic.last_reply_at | format }}</div>
              <div class="name">{{ topic.author.loginname }}</div>
              <div class="title" :class="{'no-tip': !topic.top && !topic.good}">
                <span class="tip top" v-if="topic.top">置顶</span>
                <span class="tip good" v-else-if="topic.good">精华</span>
                {{ topic.title }}
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="item">
              <i class="iconfont icon-comment"></i>
              <span>{{ topic.reply_count }}</span>
            </div>
            <div class="item">
              <i class="iconfont icon-book"></i>
              <span>{{ topic.visit_count }}</span>
            </div>
            <div class="item item-right" v-if="topic.tab === 'share'">
              <i class="iconfont icon-share"></i>
              <span>分享</span>
            </div>
            <div class="item item-right" v-if="topic.tab === 'ask'">
              <i class="iconfont icon-ask"></i>
              <span>问答</span>
            </div>
            <div class="item item-right" v-if="topic.tab === 'job'">
              <span>招聘</span>
            </div>
            <div class="item item-right" v-if="!topic.tab">
              <span>其他</span>
            </div>
          </div>
        </router-link>
      </div>
      <div v-show="loading">
        <v-loading :vStyle="{margin: '15px auto 15px'}"></v-loading>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vLoading from '@/components/vloading'
  export default {
    name: 'topics',
    components: {
      vLoading
    },
    computed: {
      ...mapGetters({
        isNav: 'isNav',
        items: 'items',
        itemIndex: 'itemIndex',
        loading: 'loading',
        topics: 'topicsData'
      })
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        window.addEventListener('scroll', vm.scrollGetTopics, false)
      })
    },
    beforeRouteLeave (to, from, next) {
      window.removeEventListener('scroll', this.scrollGetTopics, false)
      next()
    },
    methods: {
      getTopics (i) {
        this.topics = []
        window.scroll(0, 0)
        this.$store.commit('ITEMS_INDEX', i)
        this.$store.commit('TOPICS_KEY', {page: 0, limit: 20})
        this.$store.dispatch('topicsData')
      },
      scrollGetTopics () {
        let totalHeight = parseFloat(window.innerHeight) + parseFloat(window.scrollY)
        if (document.body.clientHeight <= totalHeight + 130) {
          this.$store.dispatch('topicsData')
        }
      }
    },
    created () {
      window.scroll(0, 0)
      if (this.topics.length === 0) {
        this.$store.dispatch('topicsData')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-list {
    position: fixed;
    left: 0;
    top: 60px;
    right: 0;
    z-index: 99;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin-top: -1px;
    background-color: #444;
    transition: all .18s ease-in;
    &.menu-list-slide {
      transform: translateX(40%);
    }
    li {
      float: left;
      width: 20%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      &.active {
        color: #ed2316;
      }
    }
  }
  .topic-wrap {
    padding-top: 40px;
  }
  .topic-item {
    border-bottom: 1px solid #444;
    a {
      text-decoration: none;
      color: #444;
      font-size: 16px;
    }
  }
  .info-wrap {
    padding: 15px;
    margin: 0 15px;
    overflow: hidden;
    border-bottom: 1px solid #f0f0f0;
  }
  .avatar {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info {
    position: relative;
    padding-left: 65px;
    .time {
      position: absolute;
      right: 0;
      top: 0;
    }
    .title {
      position: relative;
      margin-top: 10px;
      padding-left: 50px;
      height: 24px;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.no-tip {
        padding-left: 0;
      }
      .tip {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        &.top {
          background-color: #80bd01;
          color: #fff;
        }
        &.good {
          background-color: #444;
          color: #fff;
        }
      }
    }
  }
  .info-item {
    padding: 15px;
    color: #444;
    .item {
      display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
      }
    }
    .item-right {
      float: right;
    }
  }
</style>
