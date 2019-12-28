<style scoped>
  .container {
    max-width: 1350px;
  }

  .become-partner {
    z-index: 300;
    margin-top: -120px;
    max-width: 1000px;
  }

  .albasyirGroupFoot {
    font-size: 85pt;
    position: absolute;
    left: 0;
    margin-top: -105px;
  }

  @media only screen and (max-width: 768px) {
    .albasyirGroupFoot {
      font-size: 50pt;
      margin-top: -80px;
    }
  }

  @media only screen and (max-width: 600px) {
    .albasyirGroupFoot {
      font-size: 40pt;
      margin-top: -73px;
    }
  }

  @media only screen and (max-width: 400px) {
    .albasyirGroupFoot {
      font-size: 35pt;
      margin-top: -65px;
    }
  }

</style>

<template>
    <footer class='container-fluid pt-5 mt-5'>
        <div class='container bg-light pt-5 px-md-5 px-3 mt-5'>
          <div class='become-partner card shadow-lg mx-auto p-2 p-md-5'>
            <div class='card-body'>
              <div class='row'>
                <div class='d-none d-sm-block col-0 col-lg-2 col-sm-4'>
                  <img width="100%" src="/icon.png" />
                </div>
                <div class='col-12 col-lg-10 col-sm-8'>
                  <h2>Gabung menjadi Partner Albasyir</h2>
                  <p>
                    Albasyir menyediakan pengembangan dan konsultasi terbaik.
                    Setiap mitra kami dapat membantu Anda membuat proyek yang indah dan dirancang dengan baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='container py-5'>
            <div class='albasyirGroupFoot font-weight-bold'>
              Albasyir Can!
            </div>
          </div>
          <div class='container pb-3 pt-0 pt-md-5'>
            <div class='row'>
              <div class='col-12 col-md-4 col-sm-6'>
                <div class='display-4 pb-3 pt-5'>
                  Ekosistem
                </div>
                <ul class="list-group pr-5">
                  <li class="list-group-item-action bg-transparent list-group-item border-0 py-1">
                    <nuxt-link tag='a' to='/hosting'>
                      Hosting
                    </nuxt-link>
                  </li>
                  <li class="list-group-item-action bg-transparent list-group-item border-0 py-1">
                    Custom Design
                  </li>
                  <li class="list-group-item-action bg-transparent list-group-item border-0 py-1">
                    Custom Development
                  </li>
                </ul>
              </div>
              <div class='col-12 col-md-8 col-sm-6'>
                <div class='display-4 pb-3 pt-5'>Klien saya yang luar biasa..</div>
                <p>
                  Kami sangat senang melihat hasil kerja kami digunakan dalam Proyek Pribadi, Aplikasi Perusahaan Besar,
                  Proyek Pemerintah atau di Universitas Bergengsi.
                </p>
                <span>
                  Albasyir.com @ 2019
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class='container text-center py-3'>
            <img width="50px" src="/icon.png" />
        </div>
    </footer>
</template>
