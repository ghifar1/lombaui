<template>
  <div class="sticky z-10 top-0 w-full text-white h-24 shadow-2xl" id="navbar">
    <div class="grid grid-cols-2 h-full">
      <div class="grid grid-cols-2">
        <div class="flex mx-20 items-center justify-center"><router-link to="/">
        <img :src="'../src/assets/logo.png'" class="h-16"/>
        </router-link></div>
      </div>
      <div class="mx-44">
        <div class="flex h-full items-center justify-between">
          <router-link to="/test">Tentang Kami</router-link>
          <p>Artikel</p>
          <p>Galeri</p>
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