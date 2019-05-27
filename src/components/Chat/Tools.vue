<template>
  <div v-show="showTool" class="tools">
    <div v-for="(tool, t_index) in tools" :key="t_index" class="tool">
      {{ tool.name }}
      <input type="file" accept="image/*" class="hidden-input-file" multiple @change="getImage" />
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
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
      }] // 操作集合
    }
  },
  watch: {
    showTool (val) {
      console.log(val)
    }
  },
  methods: {
    ...mapMutations('chat', ['addRecord']),
    getImage (e) {
      // 此处设置的上传框可多选图片
      let files = Array.from(e.target.files)
      let that = this
      files.forEach(element => {
        // 判断是否是图片类型
        if (!/image\/\w+/.test(element.type)) {
          alert('只能选择图片')
          return false
        }
        // 转base64显示图片
        let reader = new FileReader()
        reader.readAsDataURL(element)
        reader.onload = function (e) {
          that.addRecord({
            person: 'me',
            content: e.target.result,
            content_type: 'image',
            time: Math.ceil(new Date().getTime() / 1000)
          })
        }
      })
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
    .c(@secondary-color);
    border: 0.01rem solid @secondary-color;
    text-align: center;
    line-height: 1rem;
    margin-right: 0.2rem;
    position: relative;
    .hidden-input-file {
      position: absolute;
      .w(100%);
      .h(100%);
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 10;
    }
  }
}
</style>
