<template>
  <container-component>
    <div class="grid grid-cols-3 w-full gap-10">
      <div class="flex items-center justify-center">
        <p class="text-5xl font-bold">Artikel Terbaru</p>
      </div>
      <div class="col-span-2 flex flex-wrap justify-between items-center w-full gap-5">
        <article-card-welcome-component>
          <template v-slot:artikel-title><router-link to="/detailsNews">Belajar Adobe Illustrator</router-link></template>
          <template v-slot:artikel-teks
            >#1. Dasar - Dasar Tools Adobe Illustrator</template
          >
          <template v-slot:artikel-gambar>
            <img :src="'/img/illustrator.png'" />
          </template>
        </article-card-welcome-component>
        <article-card-welcome-component>
          <template v-slot:artikel-title><router-link to="/detailsNews">Belajar Adobe Photoshop</router-link></template>
          <template v-slot:artikel-teks
            >#1. Dasar - Dasar Tools Adobe Photoshop</template
          >
          <template v-slot:artikel-gambar>
            <img :src="'/img/photoshop.png'" />
          </template>
        </article-card-welcome-component>
      </div>
    </div>
  </container-component>
</template>

<script>
import ArticleCardWelcomeComponent from './ArticleCardWelcomeComponent.vue';
import ContainerComponent from "../ContainerComponent.vue";

export default {
  components: {
    ContainerComponent,
    ArticleCardWelcomeComponent,
  },
};
</script>

<style>
</style>