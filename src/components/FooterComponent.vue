<template>
  <div id="footer-rounded" class="relative">
    <container-component>
      <div class="grid grid-cols-4 text-white h-full">
        <div class="col-span-4 md:col-span-1 flex items-center justify-center h-full">
          <div>
            <img :src="'/img/logo.png'" class="w-28 md:w-48 mt-5 md:mt-0 mx-auto md:mx-0" />
            <p class="mt-14 font-medium text-xl md:text-2xl">Alamat</p>
            <p class="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="col-span-4 md:col-span-1 pt-2 md:pt-24">
          <div>
            <p class="font-medium text-2xl mb-4">Informasi</p>
            <div class="font-light">
              <p class="my-1">Tentang Kami</p>
              <p class="my-1">Artikel</p>
              <p class="my-1">Galeri</p>
            </div>
          </div>
          </div>
        <div class="col-span-4 md:col-span-1 pt-2 md:pt-24">
          <div>
            <p class="font-medium text-2xl mb-4">Kontak Kami</p>
            <div class="font-light">
              <p class="my-1">Email : 12345689@gmail.com</p>
              <p class="my-1">Whats’App : 0888-9908-0203</p>
            </div>
          </div>
        </div>
        <div class="col-span-4 md:col-span-1 pt-2 md:pt-24">
          <p class="font-medium text-2xl mb-2">Sosial Media</p>
          <div class="flex">
            <div class="bg-white rounded-full p-2 m-2">
              <img :src="'/img/instagram_black.png'" class="w-5" />
            </div>
            <div class="bg-white rounded-full p-2 m-2">
              <img :src="'/img/facebook_black.png'" class="w-5" />
            </div>
            <div class="bg-white rounded-full p-2 m-2">
              <img :src="'/img/twitter_black.png'" class="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-4 text-white w-full text-center">
      Copyright 2021. All Rights Reserved
    </div>
    </container-component>
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
.router-link-active {
  border-bottom: 2px solid rgb(96, 165, 250);
}

#footer-rounded {
  border-top-left-radius: 250px;
  height: 400px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(10, 10, 10, 1) 0%,
    rgba(67, 68, 68, 1) 50%
  );
}

@media only screen and (max-width: 800px) {
  #footer-rounded {
    border-top-left-radius: 150px;
    height: 800px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(67, 68, 68, 1) 0%,
      rgba(10, 10, 10, 1) 100%
    );
  }
  
}
</style>