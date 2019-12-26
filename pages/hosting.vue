<template>
  <div>
    <div class='container-fluid bg-default py-5'>
      <div class="container">
        <div class='row'>
          <div class='col-12 col-md-5 col-lg-6'>
            <h2 class='my-lg-5 display-3 text-white'>
              Hosting Terbaik Dari Kami
            </h2>
            <p class='h4 text-white'>
              Proritas kecepatan, keamanan dan termurah <br />
              <b>
                harga mulai dari 20.000 / bln <br />
                ( TERMASUK PPN, WOW! )
              </b>
            </p>

            <button class='btn btn-primary my-2'>Scroll kebawah</button>
          </div>
          <div class='col-12 col-md-7 col-lg-6'>
            <img class='my-3' width="100%" src="/img/hosting-header.webp" alt="header hosting">
          </div>
        </div>
      </div>
    </div>

    <div class='container-fluid py-3'>
      <div class='container'>
        <div class='text-center'>
          <h2>Mengapa Memilih Kami?</h2>
          <p>
            Alasanya cukup sederhana
          </p>
        </div>
        <div class='row'>
          <div class='col-12 col-md-6 col-lg-4'>
            <ListCard
              keylist="1"
              title="Hosting Super Cepat"
              desc="Pengunjung tidak suka website lambat. Dengan dukungan LiteSpeed Web Server, waktu loading website Anda akan meningkat pesat."
            />
          </div>

          <div class='col-12 col-md-6 col-lg-4'>
            <ListCard
              keylist="2"
              title="Keamanan Website Ekstra"
              desc="Teknologi keamanan Imunify 360 memungkinkan website Anda terlindung dari serangan hacker, malware, dan virus berbahaya setiap saat."
            />
          </div>

          <div class='col-12 col-md-12 col-lg-4'>
            <ListCard
              keylist="3"
              title="Biaya Hemat, Kualitas Hebat"
              desc="Anda bisa berhemat dan tetap mendapatkan hosting terbaik dengan fitur lengkap, dari auto install WordPress, cPanel lengkap, hingga SSL gratis."
            />
          </div>
        </div>
      </div>
    </div>

    <div class='container-fluid py-5'>
      <div class="container">
        <div class='text-center'>
          <h2>Unlimited Hosting</h2>
          <p>
            Pilihan yang cocok website sekala kecil s.d menegah
          </p>
        </div>
        <div class='row'>
          <div v-for='row in product.unlimited' class='col-lg-3 col-md-4 col-sm-6 col-12'>
            <Product
              class='my-3'
              :title='row.title'
              :descList="row.descList"
              :price="row.price"
              :label="row.label"
              :buybutton="row.buybutton"
            />
          </div>
          <div class='col-12'>
            <div class='card'>
              <div class='card-body'>
                Produk lainya akan segera tiba untuk anda
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='container-fluid bg-yellow py-4'>
      <div class='container'>
        <p class='m-0'>
          Hosting diduking oleh PHP7, CloudLinux, CloudFlare, BitNinja dan DC DCI-Indonesia.
          Cloud VPS Murah didukung oleh Webuzo Softaculous, Intel SSD dan cloud computing technology
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Package.vue'
import ListCard from '@/components/ListCard.vue'

export default {
  components: {
    Product, ListCard
  },

  head: () => ({
    title: "Hosting Murah, Handal dan Cepat - Albasyir",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Proritas kecepatan, keamanan dan termurah, harga mulai dari 20.000 / bulan'
      }
    ]
  }),

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
          label: "Pemula ?",
          price: 23114,
          buybutton: function() {
             window.location.assign("https://api.whatsapp.com/send?phone=6285783821812&text=Saya%20ingin%20produk%20hosting%20*Merakyat*&source=https://albasyir.com/hosting")
          },
          descList: [
            {
              name: '500 MB Disk Space',
              desc: 'Kami menetapkan batasan jumlah ruang disk sebanyak 500MB dalam paket ini'
            },
            {
              name: 'Unlimited Bandwidth',
              desc:
                "Kami tidak menetapkan batasan bandwidth yang dapat Anda gunakan untuk pengoperasian " +
                "situs web Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Database',
              desc:
                "Anda tidak dibatasi untuk membuat database pada akun hosting Anda. " +
                "Selama itu sesuai dengan ToS kami!"
            },
            {
              name: '1 Domain',
              desc: `Anda hanya bisa menggunakan 1 domain pada akun hosting Anda.`
            },
            {
              name: 'Instant Backup',
              desc:
                "Kami memberikan fasilitas untuk membuat cadangan dari seluruh akun cPanel Anda kapan saja. " +
                "Setelah selesai melakukan backup, Anda akan diberi link download. " +
                "Anda bisa menggunakan backup ini untuk mengembalikan akun Anda di server kami jika diperlukan."
            },
            {
              name: 'SSL Gratis Selamanya',
              desc:
                "Kami memberikan fasilitas SSL gratis selamanya " +
                "dan dapat digunakan untuk semua klien layanan hosting kami tanpa batasan jumlah website, " +
                "domain ataupun subdomain."
            }
          ]
        },

        {
          title: "Hemat",
          price: 43180,
          buybutton: function() {
             window.location.assign("https://api.whatsapp.com/send?phone=6285783821812&text=Saya%20ingin%20produk%20hosting%20*Hemat*&source=https://albasyir.com/hosting")
          },
          descList: [
            {
              name: 'Unlimited Disk Space',
              desc: 'Kami tidak menetapkan batasan jumlah ruang disk yang dapat Anda gunakan untuk pengoperasian normal situs web pribadi, kecil, atau menengah selama itu sesuai dengan ToS kami!'
            },
            {
              name: 'Unlimited Bandwidth',
              desc:
                "Kami tidak menetapkan batasan bandwidth yang dapat Anda gunakan untuk pengoperasian " +
                "situs web Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited POP3 Email',
              desc: "Anda berhak membuat akun email tanpa batasan dan melakukan pengiriman sebanyak2nya kepada klien Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Database',
              desc:
                "Anda tidak dibatasi untuk membuat database pada akun hosting Anda. " +
                "Selama itu sesuai dengan ToS kami!"
            },
            {
              name: '10 Addon Domain',
              desc: `Anda hanya dapat membuat 10 Addon domain pada akun hosting Anda.`
            },
            {
              name: 'Instant Backup',
              desc:
                "Kami memberikan fasilitas untuk membuat cadangan dari seluruh akun cPanel Anda kapan saja. " +
                "Setelah selesai melakukan backup, Anda akan diberi link download. " +
                "Anda bisa menggunakan backup ini untuk mengembalikan akun Anda di server kami jika diperlukan."
            },
            {
              name: 'SSL Gratis Selamanya',
              desc:
                "Kami memberikan fasilitas SSL gratis selamanya " +
                "dan dapat digunakan untuk semua klien layanan hosting kami tanpa batasan jumlah website, " +
                "domain ataupun subdomain."
            }
          ]
        },

        {
          title: "Personal",
          label: "Produk Terbaik",
          price: 63529,
          buybutton: function() {
             window.location.assign("https://api.whatsapp.com/send?phone=6285783821812&text=Saya%20ingin%20produk%20hosting%20*Personal*&source=https://albasyir.com/hosting")
          },
          descList: [
            {
              name: 'Unlimited Disk Space',
              desc: 'Kami tidak menetapkan batasan jumlah ruang disk yang dapat Anda gunakan untuk pengoperasian normal situs web pribadi, kecil, atau menengah selama itu sesuai dengan ToS kami!'
            },
            {
              name: 'Unlimited Bandwidth',
              desc:
                "Kami tidak menetapkan batasan bandwidth yang dapat Anda gunakan untuk pengoperasian " +
                "situs web Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited POP3 Email',
              desc: "Anda berhak membuat akun email tanpa batasan dan melakukan pengiriman sebanyak2nya kepada klien Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Database',
              desc:
                "Anda tidak dibatasi untuk membuat database pada akun hosting Anda. " +
                "Selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Addon Domain',
              desc: `Anda tidak dibatasi untuk membuat Addon domain pada akun hosting Anda. Selama itu sesuai dengan ToS kami!`
            },
            {
              name: 'Instant Backup',
              desc:
                "Kami memberikan fasilitas untuk membuat cadangan dari seluruh akun cPanel Anda kapan saja. " +
                "Setelah selesai melakukan backup, Anda akan diberi link download. " +
                "Anda bisa menggunakan backup ini untuk mengembalikan akun Anda di server kami jika diperlukan."
            },
            {
              name: 'SSL Gratis Selamanya',
              desc:
                "Kami memberikan fasilitas SSL gratis selamanya " +
                "dan dapat digunakan untuk semua klien layanan hosting kami tanpa batasan jumlah website, " +
                "domain ataupun subdomain."
            },
            {
              name: 'SpamAsassin Mail Protection',
              desc: "Fasilitas untuk mendeteksi email spam yang tidak diinginkan lalu mencegah masuknya email-email tersebut ke Inbox Anda."
            }
          ]
        },


        {
          title: "Proritas",
          price: 93908,
          buybutton: function() {
             window.location.assign("https://api.whatsapp.com/send?phone=6285783821812&text=Saya%20ingin%20produk%20hosting%20*Proritas*&source=https://albasyir.com/hosting")
          },
          descList: [
            {
              name: 'Unlimited Disk Space',
              desc: 'Kami tidak menetapkan batasan jumlah ruang disk yang dapat Anda gunakan untuk pengoperasian normal situs web pribadi, kecil, atau menengah selama itu sesuai dengan ToS kami!'
            },
            {
              name: 'Unlimited Bandwidth',
              desc:
                "Kami tidak menetapkan batasan bandwidth yang dapat Anda gunakan untuk pengoperasian " +
                "situs web Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited POP3 Email',
              desc: "Anda berhak membuat akun email tanpa batasan dan melakukan pengiriman sebanyak2nya kepada klien Anda selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Database',
              desc:
                "Anda tidak dibatasi untuk membuat database pada akun hosting Anda. " +
                "Selama itu sesuai dengan ToS kami!"
            },
            {
              name: 'Unlimited Addon Domain',
              desc: `Anda tidak dibatasi untuk membuat Addon domain pada akun hosting Anda. Selama itu sesuai dengan ToS kami!`
            },
            {
              name: 'Instant Backup',
              desc:
                "Kami memberikan fasilitas untuk membuat cadangan dari seluruh akun cPanel Anda kapan saja. " +
                "Setelah selesai melakukan backup, Anda akan diberi link download. " +
                "Anda bisa menggunakan backup ini untuk mengembalikan akun Anda di server kami jika diperlukan."
            },
            {
              name: 'SSL Gratis Selamanya',
              desc:
                "Kami memberikan fasilitas SSL gratis selamanya " +
                "dan dapat digunakan untuk semua klien layanan hosting kami tanpa batasan jumlah website, " +
                "domain ataupun subdomain."
            },
            {
              name: 'Prioritas Layanan Support',
              desc: "Tim Customer Experience kami yang terlatih dan berdedikasi akan siap 24/7/365 melalui telepon, live chat, dan email membantu menyelesaikan masalah segala hal yang berhubungan dengan akun web hosting atau billing Anda."
            },
            {
              name: 'SpamAsassin Mail Protection',
              desc: "Fasilitas untuk mendeteksi email spam yang tidak diinginkan lalu mencegah masuknya email-email tersebut ke Inbox Anda."
            }
          ]
        }
      ]
    }
  })
}
</script>
