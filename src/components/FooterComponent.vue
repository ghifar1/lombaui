<template>
  <div id="footer-rounded" class="relative">
    <container-component>
      <div class="grid grid-cols-3 text-white h-full">
        <div class="flex items-center justify-center h-full">
          <div>
            <img :src="'/src/assets/logo.png'" class="w-48" />
            <p class="mt-16 font-medium text-2xl">Alamat</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <p class="font-medium text-2xl mb-4">Informasi</p>
            <div class="font-light">
              <p class="my-1">Tentang Kami</p>
              <p class="my-1">Artikel</p>
              <p class="my-1">Galeri</p>
            </div>
          </div>
          <div>
            <p class="font-medium text-2xl mb-4">Kontak Kami</p>
            <div class="font-light">
              <p class="my-1">Email : 12345689@gmail.com</p>
              <p class="my-1">Whats’App : 0888-9908-0203</p>
            </div>
          </div>
        </div>
        <div>
          <p class="font-medium text-2xl mb-4">Sosial Media</p>
          <div class="flex">
            <div class="bg-white rounded-full p-4 m-2">
              <img :src="'/src/assets/instagram_black.png'" class="h-10" />
            </div>
            <div class="bg-white rounded-full p-4 m-2">
              <img :src="'/src/assets/facebook_black.png'" class="h-10" />
            </div>
            <div class="bg-white rounded-full p-4 m-2">
              <img :src="'/src/assets/twitter_black.png'" class="h-10" />
            </div>
          </div>
        </div>
      </div>
    </container-component>
    <div class="absolute bottom-4 text-white w-full text-center">
      Copyright 2021. All Rights Reserved
    </div>
  </div>
</template>

<script>
import ContainerComponent from "./ContainerComponent.vue";

export default {
  components: {
    ContainerComponent,
  },
};
</script>

<style>
#footer-rounded {
  border-top-left-radius: 250px;
  height: 500px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 10, 10, 1) 0%,
    rgba(67, 68, 68, 1) 50%
  );
}
</style>