<template>
  <div id="app" @contextmenu="stopRightClick">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // 监听窗口是否发生变化
    window.addEventListener('resize', () => {
        this.$root.$emit('resize', true);
    })
  },

  methods: {
    stopRightClick (e) {
      e.preventDefault()
    }
  }
}
</script>


<style lang="scss">
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
    min-width: 1380px;
  }
</style>
