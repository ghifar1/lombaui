<template>
  <div class="sticky z-10 top-0 w-full text-white h-24 shadow-2xl" id="navbar">
    <div class="grid grid-cols-2 h-full">
      <div class="grid grid-cols-2">
        <div class="flex items-center justify-center"><router-link to="/">
        <img :src="'/img/logo.png'" class="w-16"/>
        </router-link></div>
      </div>
      <div class="hidden md:block mx-20 lg:mx-44">
        <div class="flex h-full items-center justify-between">
          <router-link to="/about" @click="scrollToTop"><p>Tentang Kami</p></router-link>
          <router-link to="/news" @click="scrollToTop"><p>Artikel</p></router-link>
          <router-link to="/gallery" @click="scrollToTop"><p>Galeri</p></router-link>
        </div>
      </div>
      <div class="flex md:hidden justify-end items-center mx-10">
       <menu-icon @click="toggleMobileNav" v-show="!mobileNav" class="h-10" />
       <x-icon @click="toggleMobileNav" v-show="mobileNav" class="h-10" />
      </div>
    </div>
    <div class="flex flex-col gap-5 md:hidden bg-abucoklat px-10 py-5  transform duration-300 ease-out" 
    :class="mobileNav ? 'translate-y-0 opacity-100': '-translate-y-64 opacity-0'">
          <router-link to="/about" @click="toggleMobileNav"><p>Tentang Kami</p></router-link>
          <router-link to="/news" @click="toggleMobileNav"><p>Artikel</p></router-link>
          <router-link to="/gallery" @click="toggleMobileNav"><p>Galeri</p></router-link>
    </div>
  </div>
</template>

<script>
import {MenuIcon, XIcon} from '@heroicons/vue/solid';
export default {
  components: {
    MenuIcon,
    XIcon
  },
  data()
  {
    return {
      mobileNav: false
    }
  },
  methods: {
    toggleMobileNav()
    {
      this.mobileNav = !this.mobileNav;
    },
  }
};
</script>

<style>
#navbar {
  background-color: #3F3F3F;
}
</style>