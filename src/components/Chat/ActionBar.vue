<template>
    <div class="action-bar">
        <textarea v-model="msg" rows="3" maxlength="-1" placeholder="说点啥" />
        <div class="action">
            <button v-if="msg" @click="send">发送</button>
            <span v-else class="add" @click="$emit('toggleTool')">+</span>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapMutations('chat', ['addRecord']),
    send () {
      this.msg && this.addRecord({
        person: 'me',
        content: this.msg,
        content_type: 'text',
        time: Math.ceil(new Date().getTime() / 1000)
      })
      this.msg = ''
    }
  }
}
</script>
<style lang="less" scoped>
.action-bar {
  .h(1rem);
  .w(100%);
  .bx-sz;
  border-top: 0.01rem solid @secondary-color;
  padding: 0.2rem 0 0.2rem 0.2rem;
  display: flex;
  align-items: center;
  textarea {
    .bx-sz;
    .h(0.6rem);
    .fz(0.28rem);
    .br;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    flex: 1;
    outline: 0;
    resize: none;
    border: @lighter-color 0.01rem solid;
    padding: 0.1rem;
    line-height: 0.4rem;
  }
  .action {
    .w(1.2rem);
    .bx-sz;
    text-align: center;
    button {
      .bg(@primary-color);
      .c(#fff);
      .br;
      display: inline-block;
      border: 0;
      padding: 0.1rem 0.2rem;
      outline: 0;
    }
    .add {
      .br(50%);
      .c(@secondary-color);
      .w(0.5rem);
      .h(0.5rem);
      display: inline-block;
      border: 0.01rem solid @secondary-color;
      text-align: center;
      line-height: 0.5rem;
    }
  }
}
</style>
