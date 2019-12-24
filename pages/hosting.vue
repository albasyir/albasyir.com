<template>
  <div class='container-fluid bg-default pb-5 pt-3'>
    <div class="container">
      <div>
        <h2 class='text-white'>Unlimited Hosting</h2>
      </div>
      <div class='row'>
        <div v-for='row in product.unlimited' class='col'>
          <Product :title='row.title' :descList="row.descList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product/hosting/Package.vue'

export default {
  components: {
    Product
  },

  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1)
    })
  },

  data: () => ({
    product: {
      unlimited: [
        {
          title: "Merakyat",
          descList: [
            { 
              name: '500 MB Disk Space', 
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini' 
            }, 
            { 
              name: 'Unlimited Bandwidth', 
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            },
            { 
              name: 'Unlimited Database', 
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            },
            { 
              name: '1 Domain', 
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            },
            { 
              name: 'Instant Backup', 
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            },
            { 
              name: 'SSL Gratis Selamanya',
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            }
          ]
        },
        {
          title: "Merakyat2",
          descList: [
            { name: 'test3' }, 
            { name: 'test4' }
          ]
        }
      ]
    }
  })
}
</script>