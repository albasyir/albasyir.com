<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-default">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="/icon.png" alt="Albasyir Logo">
                <span class='ml-2'>
                    Al-basyir
                </span>
            </a>

            <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbar-default" 
                aria-controls="navbar-default" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbar-default">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class='col-6'>
                            <a class="navbar-brand" href="#">
                                <img src="/icon.png" alt="Albasyir Logo">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">   
                        <nuxt-link tag='a' class="nav-link nav-link-icon" to="/">
                            <i class="ni ni-circle-08" />
                            <span class="nav-link-inner--text">
                                Portfolio
                            </span>
                        </nuxt-link>
                    </li>

                    <li class="nav-item">   
                        <nuxt-link tag='a' class="nav-link nav-link-icon" to="/hosting">
                            <i class="ni ni-world-2" />
                            <span class="nav-link-inner--text">
                                Hosting
                            </span>
                        </nuxt-link>
                    </li>

                    <!--
                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-books"></i>
                            <span class="nav-link-inner--text">E-book</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Basic Web</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">NodeJS Native</a>
                            <a class="dropdown-item" href="#">Express Framework</a>
                        </div>
                    </li>
                    -->
                </ul>
            </div>
        </div>
    </nav>
</template>