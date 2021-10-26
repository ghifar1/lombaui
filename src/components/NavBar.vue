<template>
  <div class="sticky z-10 top-0 w-full text-white h-24 shadow-2xl" id="navbar">
    <div class="grid grid-cols-2 h-full">
      <div class="grid grid-cols-2">
        <div class="flex mx-20 items-center justify-center"><router-link to="/">
        <img :src="'/img/logo.png'" class="h-16"/>
        </router-link></div>
      </div>
      <div class="mx-44">
        <div class="flex h-full items-center justify-between">
          <router-link to="/about" @click="scrollToTop"><p>Tentang Kami</p></router-link>
          <router-link to="/news" @click="scrollToTop"><p>Artikel</p></router-link>
          <router-link to="/gallery" @click="scrollToTop"><p>Galeri</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#navbar {
  background-color: #3F3F3F;
}
</style>