<style scoped>
  .loading-enter-active, .loading-leave-active {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #5e72e4;
    transition: all 2000ms;
  }

  .loading-enter {
    width: 0;
  }

  .loading-leave-to {
    left: 100vw;
  }

  .loadingTextContainer {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 5vh 5vw;
  }

  .loadingTextContent {
    font-size: 100pt; 
    color: white;
    font-weight: bolder;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #5e72e4;
    padding: 0 0 0 20px;
  }  
</style>

<template>
  <transition name='loading'>
    <div v-if='loading'>
      <div class='loadingTextContainer'>
        <div class='loadingTextContent'>
          Please Wait...
        </div>
      </div>
    </div>
  </transition>
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
