<template>
  <div class='container-fluid bg-default'>
    <div class="container">
      <h1 class='text-white'>Hosting</h1>
    </div>
  </div>
</template>

<script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1)
    })
  }
}
</script>