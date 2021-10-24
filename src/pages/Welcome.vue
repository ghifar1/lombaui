<template>
  <banner-welcome />
  <divisi-component />
  <tentang-kami-component />
  <event-datang />
  <kepengurusan-welcome />
  <artikel-terbaru />
  <footer-component />
</template>

<script>
import BannerWelcome from "../components/WelcomeComp/BannerWelcome.vue";
import DivisiComponent from "../components/WelcomeComp/DivisiComponent.vue";
import TentangKamiComponent from "../components/WelcomeComp/TentangKamiComponent.vue";
import EventDatang from "../components/WelcomeComp/EventDatang.vue";
import ArtikelTerbaru from "../components/WelcomeComp/ArtikelTerbaru.vue";
import FooterComponent from "../components/FooterComponent.vue";
import KepengurusanWelcome from "../components/WelcomeComp/KepengurusanWelcome.vue";

export default {
  components: {
    BannerWelcome,
    DivisiComponent,
    TentangKamiComponent,
    EventDatang,
    ArtikelTerbaru,
    FooterComponent,
    KepengurusanWelcome,
  },
};
</script>

<style>
</style>