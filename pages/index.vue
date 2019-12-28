<template>
  <div class='container-fluid py-5 bg-default' >
    <SlideText :slidesData='slides'  />
  </div>
</template>

<script>
import SlideText from '@/components/SlideText.vue'

import typerjs from 'typer-js'

export default {
  components: {
    SlideText
  },

  data: () => ({
    slides: [
      {
        title: "Kami Membuat Mitra",
        desc: "Tidak klien-vendor atau vendor-klien, kita kolaborasi untuk sukses bersama."
      },
      {
        title: "Kami Punya Ekosistem",
        desc: "Desain, pengembangan, dan penerapan untuk perusahaan atau start-up."
      }
    ]
  })
}
</script>
