<template>
    <div class="content">
      <div
        v-for="(talk, t_index) in record"
        :key="t_index"
        :class="talk.person"
        class="container"
      >
        <span v-if="talk.person == 'system'">{{ talk.content }}</span>
        <template v-else>
          <img :src="'/static/images/' + talk.person + '.jpeg'" class="avatar">
          <div class="pop">
            <div v-if="talk.content_type == 'text'" class="text">{{ talk.content }}</div>
            <img
              v-else-if="talk.content_type == 'image'"
              :src="talk.content"
              class="content-img"
              object-fit="cover"
            >
            <span
              v-if="now < parseInt(talk.time) + 120 && talk.person == 'me'"
              class="retreat" @click="delRecord(t_index)"
            >撤回</span>
          </div>
        </template>
      </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: { ...mapState('chat', ['record']) },
  data () {
    return {
      now: '',
      timer: ''
    }
  },
  methods: {
    ...mapMutations('chat', ['delRecord']),
    /**
     * 轮询判断是否显示“撤回”
     */
    count () {
      this.timer = setTimeout(() => {
        this.now = Math.ceil(new Date().getTime() / 1000)
        this.count()
      }, 1000)
    }
  },
  mounted () {
    this.now = Math.ceil(new Date().getTime() / 1000)
    this.count()
  },
  deactivated () {
    clearTimeout(this.timer)
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="less" scoped>
.content {
  .bx-sz;
  .fz(0.28rem);
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column-reverse;
  .container {
    display: flex;
    padding: 0.2rem;
    .avatar {
      .w(0.8rem);
      .h(0.8rem);
      .br;
    }
    .pop {
      flex-shrink: 0;
      position: relative;
      .retreat {
        .fz(0.24rem);
        .c(#999);
        position: absolute;
        bottom: 0;
      }
      .text {
        .br;
        .bx-sz;
        padding: 0.2rem;
        min-height: 0.8rem;
        min-width: 0.5rem;
        max-width: 3.9rem;
        word-wrap: break-word;
      }
      .content-img {
        .br;
        max-height: 3.9rem;
        max-width: 3.12rem;
      }
    }
  }
  .system {
    justify-content: center;
    span {
      display: block;
      .bx-sz;
      .bg(rgba(0, 0, 0, 0.2));
      .br;
      .c(#fff);
      .fz(0.24rem);
      padding: 0.05rem 0.2rem;
    }
  }
  .me {
    flex-direction: row-reverse;
    .avatar {
      margin-left: 0.2rem;
    }
    .text {
      .bg(@primary-color);
      .c(#fff);
    }
    .retreat {
      left: -0.6rem;
    }
  }
  .other {
    .avatar {
      margin-right: 0.2rem;
    }
    .text {
      .bg;
      .c(@primary-color);
      border: 0.01rem solid #e5e5e5;
    }
    .retreat {
      right: -0.6rem;
    }
  }
}
</style>
