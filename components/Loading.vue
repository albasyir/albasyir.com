<style scoped>
  .loading {
    width: 0;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: blue;
  }
</style>

<template>
  <div ref='loadingLayer' class='loading'></div>
</template>

<script>
export default {

  data: () => ({
    speedOfTransition: 3000,
    intervalFunc: null
  }),

  methods: {

    restartLoading() {

      this.$refs.loadingLayer.style.transition = "none"
      this.$refs.loadingLayer.style.left = 0
      this.$refs.loadingLayer.style.width = 0
      this.$refs.loadingLayer.style.transition = "all " + this.speedOfTransition + "ms"

    },

    start() {
      this.restartLoading()
      this.$refs.loadingLayer.style.width = "100vw"
    },

    finish() {
      this.$refs.loadingLayer.style.left = "100vw"
    }
  }
}
</script>
