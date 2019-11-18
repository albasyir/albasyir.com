<template>
  <div class="container">
    <div>
      <h1 class="title">
        <i class="fa fa-child" aria-hidden="true"></i>
        Test Page
      </h1>
      <h2 class="subtitle">
        Just for eval. loading style
      </h2>
      <h3>
        <nuxt-link to='/'>Back</nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 700)
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
