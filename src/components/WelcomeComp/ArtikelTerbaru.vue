<template>
  <container-component>
    <div class="grid grid-cols-3 w-full gap-10">
      <div class="flex items-center justify-center">
        <p class="text-5xl font-bold">Artikel Terbaru</p>
      </div>
      <div class="col-span-2 flex justify-between items-center w-full">
        <article-card-component>
          <template v-slot:artikel-title>Belajar Adobe Illustrator</template>
          <template v-slot:artikel-teks
            >#1. Dasar - Dasar Tools Adobe Illustrator</template
          >
          <template v-slot:artikel-gambar>
            <img :src="'/src/assets/illustrator.png'" />
          </template>
        </article-card-component>
        <article-card-component>
          <template v-slot:artikel-title>Belajar Adobe Photoshop</template>
          <template v-slot:artikel-teks
            >#1. Dasar - Dasar Tools Adobe Photoshop</template
          >
          <template v-slot:artikel-gambar>
            <img :src="'/src/assets/photoshop.png'" />
          </template>
        </article-card-component>
      </div>
    </div>
  </container-component>
</template>

<script>
import ContainerComponent from "../ContainerComponent.vue";
import ArticleCardComponent from "../ArticleCardComponent.vue";

export default {
  components: {
    ContainerComponent,
    ArticleCardComponent,
  },
};
</script>

<style>
</style>