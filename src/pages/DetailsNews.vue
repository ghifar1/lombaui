<template>
  <banner-news />
  <container-component>
    <div class="justify-items-stretch">
      <h3 class="font-bold">#1. Dasar - dasar tools Adobe Photoshop</h3>
      <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit consequat ut tincidunt nibh erat a condimentum donec. Nunc vel porta imperdiet nibh commodo tincidunt in. Vitae eu adipiscing neque, euismod mollis. Cras diam porta gravida suspendisse. Erat amet cursus mauris vulputate ut. Habitant sed sed feugiat nec facilisi quis ullamcorper mi. Scelerisque euismod purus montes, augue proin nisl, convallis enim aenean. Donec diam vulputate nunc in tempor ridiculus. Non, aliquet fames ornare enim posuere malesuada nullam morbi. Mattis turpis malesuada viverra pharetra feugiat. Morbi semper mi senectus purus.
Aliquam orci lectus viverra vitae tempor sit. Cras id diam malesuada gravida. Convallis maecenas urna, feugiat euismod tincidunt. Tincidunt nunc sed et imperdiet est nec, curabitur integer. Nibh adipiscing adipiscing magna sed tempus scelerisque.
Egestas integer est et maecenas urna. Eget semper vel amet phasellus vestibulum, eleifend tempor tellus. Risus, pellentesque faucibus risus ullamcorper faucibus ornare turpis. Donec adipiscing mauris, a id. Sapien, quam gravida lacus, nibh quis enim. Tortor id aliquam cursus gravida hendrerit mi viverra. Ut enim in purus ultrices. Bibendum eleifend et habitant imperdiet tortor, amet adipiscing. Sed phasellus consectetur ut urna, vel at.</p>
    </div>
  </container-component>
  <container-component>
    <div>
      <h3 class="font-bold">Share</h3>
      <img :src="'../src/assets/whatsapp_blue.png'" class="w-34 h-39 m-2 inline" />
      <img :src="'../src/assets/facebook_blue.png'" class="w-34 h-39 m-2 inline" />
      <img :src="'../src/assets/twitter_blue.png'" class="w-34 h-39 m-2 inline" />
      <img :src="'../src/assets/link_blue.png'" class="w-34 h-39 m-2 inline" />
    </div>
  </container-component>
  <footer-component />
</template>

<script>
import BannerNews from "../components/DetailsComp/BannerNews.vue";
import ContainerComponent from '../components/ContainerComponent.vue';
import FooterComponent from "../components/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
  NavBar,
  BannerNews,
  ContainerComponent,
  FooterComponent,
  },
};
</script>

<style>

</style>