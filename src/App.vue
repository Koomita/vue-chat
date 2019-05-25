<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    ...mapState('movement', ['isLoading', 'direction'])
  },
  watch: {
    $route (to, from) {
      this.transitionName =
        'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.32rem;
}
</style>
