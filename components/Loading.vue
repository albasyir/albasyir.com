<style scoped>
  .layer-leave-active, .layer-enter-active {
    opacity: 0;
    transition: all 1s;
  }

  .layer-enter {
    opacity: 1;
  }

  .layer-leave-to {
    opacity: 0;
  }

  .slide-leave-active, .slide-enter-active {
    width: 0;
    height: 100vh;
    position: fixed;
    transition: width 0.8s, height 0.8s, margin-left 1.5s, margin-top 1.5s;
    z-index: 999;
  }

  @media only screen and (min-width: 600px) {
    .slide-enter {
      margin-left: 0;
      width: 0;
    }

    .slide-leave-to {
      margin-left: 100vw;
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .slide-enter {
      margin-top: 0;
      height: 0;
    }

    .slide-leave-to {
      margin-top: 100vw;
      height: 100%;
    }
  }

  .fixed-all {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
  }
</style>

<template>
  <div>
    <transition v-if='loading' name='slide'>
      <div class='bg-light'></div>
    </transition>

    <transition v-if='loading' name='layer'>
      <div class='fixed-all bg-default'></div>
    </transition>
  </div>
</template>

<script>
export default {

  data: () => ({
    loading: false
  }),

  methods: {
    start() {
      this.loading = true
    },

    finish() {
      this.loading = false
    }
  }
}
</script>
