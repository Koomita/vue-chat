<template>
  <div class="chat">
    <chat-content />
    <action-bar @toggleTool="showTool = !showTool"/>
    <bottom-tools :showTool.sync="showTool"/>
  </div>
</template>
<script>
import Content from '@/components/Chat/Content'
import ActionBar from '@/components/Chat/ActionBar'
import Tools from '@/components/Chat/Tools'

export default {
  components: {
    'chat-content': Content,
    ActionBar,
    'bottom-tools': Tools
  },
  data () {
    return {
      showTool: false // 显示操作工具箱
    }
  }
}
</script>
<style lang="less" scoped>
.chat {
  .h(100vh);
  .w(100vw);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
