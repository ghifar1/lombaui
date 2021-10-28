<template>
  <nav-bar/>
  <div class="overflow-x-hidden">
      <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    NavBar,
  },
  created(){
    AOS.init()
  }
};
</script>

<style>

</style>