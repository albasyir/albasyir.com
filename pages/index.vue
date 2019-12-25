<template>
  <div class='container-fluid my-3' >
    <div class="container">
      <h1>Abdul Aziz Al Basyir</h1>
        Portfolio saya akan segera hadir, 
        untuk promosi halaman ini akan diarahkan ke produk hosting kami 
        dalam {{ detik }} detik...
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
  },

  data: () => ({
    detik: 10
  }),


  mounted() {
    setInterval(() => {
      this.detik = this.detik - (this.detik > 0 ? 1 : 0);
    }, 1000)

    setTimeout(() => {
      this.$router.push('/hosting')
    }, this.detik * 1000 )
  }
}
</script>
