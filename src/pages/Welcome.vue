<template>
  <banner-welcome />
  <divisi-component />
  <tentang-kami-component />
  <event-datang />
  <kepengurusan />
  <artikel-terbaru />
  <footer-component />
</template>

<script>
import BannerWelcome from '../components/WelcomeComp/BannerWelcome.vue'
import DivisiComponent from '../components/WelcomeComp/DivisiComponent.vue'
import TentangKamiComponent from '../components/WelcomeComp/TentangKamiComponent.vue'
import EventDatang from '../components/WelcomeComp/EventDatang.vue'
import Kepengurusan from '../components/WelcomeComp/Kepengurusan.vue'
import ArtikelTerbaru from '../components/WelcomeComp/ArtikelTerbaru.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    components: {
        BannerWelcome,
        DivisiComponent,
        TentangKamiComponent,
        EventDatang,
        Kepengurusan,
        ArtikelTerbaru,
        FooterComponent
    }
}
</script>

<style>

</style>