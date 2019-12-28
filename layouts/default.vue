<style scoped>
  .spa-text {
    font-weight: bold;
    font-size: 60pt;
    margin: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1002;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .spa-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  #spa-loading-container {
    opacity: 1;
    transition: opacity 1.2s ease-in-out;
  }

  #spa-loading-indicator {
    width: 0;
    z-index: 1001;
    transition: width 2s;
  }

  @media only screen and (max-width: 1200px) {
    .spa-text {
      font-size: 50pt;
    }
  }

  @media only screen and (max-width: 768px) {
    .spa-text {
      font-size: 30pt;
    }
  }

  @media only screen and (max-width: 576px) {
    .spa-text {
      font-size: 20pt;
    }
  }
</style>

<template>
  <div>
    <div id='spa-loading-container' >
      <div id='spa-loading-background' class='spa-loading bg-white' />
      <div id='spa-loading-indicator' class='spa-loading bg-default' />

      <span id='spa-loading-text' class='spa-text text-info'>
        Don't Make Same <br />
        Make Better.
      </span>
    </div>

    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './header'
import Footer from './footer'

export default {
  components: {
    Header, Footer
  },

  beforeCreate() {
    setTimeout(() => {
      document.getElementById('spa-loading-indicator').style.width = "25%"
    }, 1)
  },

  created() {
    setTimeout(() => {
      document.getElementById('spa-loading-indicator').style.width = "25%"
    }, 1)
  },

  beforeMount() {
    setTimeout(() => {
      document.getElementById('spa-loading-indicator').style.width = "50%"
    }, 1)
  },

  mounted() {
    setTimeout(() => {
      document.getElementById('spa-loading-indicator').style.width = "100%";
    }, 1)

    setTimeout(() => {
      document.getElementById('spa-loading-container').style.opacity = "0";
      document.getElementById('spa-loading-text').style.opacity = "0";
    }, 2500);
  }
}
</script>
