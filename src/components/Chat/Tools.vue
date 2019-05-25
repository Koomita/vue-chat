<template>
    <div v-show="showTool" class="tools">
        <div v-for="(tool, t_index) in tools" :key="t_index" class="tool">
            {{ tool.name }}
        </div>
    </div>
</template>
<script>
export default {
  props: {
    showTool: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tools: [{
        name: '图片'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.tools {
    padding: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    .tool {
        .w(1rem);
        .h(1rem);
        .br;
        border: 0.01rem solid @secondary-color;
        text-align: center;
        line-height: 1rem;
        margin-right: 0.2rem;
    }
}
</style>
