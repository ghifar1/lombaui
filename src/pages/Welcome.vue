<template>
  <banner-welcome />
  <divisi-component />
  <tentang-kami-welcome />
</template>

<script>
import BannerWelcome from '../components/BannerWelcome.vue'
import DivisiComponent from '../components/DivisiComponent.vue'
import TentangKamiWelcome from '../components/TentangKamiWelcome.vue'

export default {
    components: {
        BannerWelcome,
        DivisiComponent,
        TentangKamiWelcome,
    }
}
</script>

<style>

</style>