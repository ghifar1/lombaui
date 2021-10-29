<template>
  <container-component>
    <div class="flex items-center flex-col md:flex-row flex-grow">
      <div>
        <img :src="'/img/logo_details.png'" class="md:object-scale-down" />
      </div>
      <div class="w-4/5 m-10 md:m-5">
        <p class="text-4xl font-bold">SEJARAH & LOGO</p>
        <div class="border-b-2 border-blue-400 h-2 w-20 mt-2 mb-5"></div>
        <br>
        <p class="justify-text-stretch">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus eget sed ornare urna ultricies duis. Blandit scelerisque tincidunt placerat nibh odio varius gravida arcu. Nec, odio id tristique arcu fames imperdiet. Felis quisque vel a ultrices. Elit vivamus at gravida amet, tincidunt pretium duis lectus. Ut ornare tristique mi sit mattis leo sollicitudin at. Felis adipiscing aliquet neque, morbi purus et.
Felis quisque vel a ultrices. Elit vivamus at gravida amet, tincidunt pretium duis lectus. Ut ornare tristique mi sit mattis leo sollicitudin at. Felis adipiscing aliquet neque, morbi purus et.</p>
      </div>
    </div>
  </container-component>
  <container-component>
    <div>
        <p class="text-5xl font-bold mt-10 text-center">VISI</p>
        <div class="border-b-2 border-blue-400 h-2 w-20 mt-2 mx-auto mb-5 "></div>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ante a suspendisse aliquam sit pellentesque
 vulputate amet laoreet. Nunc tincidunt turpis cursus ullamcorper dignissim quis pulvinar consectetur ultricies. 
Hac a neque, tincidunt tristique sed arcu lectus porttitor dui.</p>
      </div>
  </container-component>
  <container-component>
    <div>
        <p class="text-5xl font-bold mt-10 text-center">MISI</p>
        <div class="border-b-2 border-blue-400 h-2 w-20 mt-2 mx-auto mb-5"></div>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl egestas sollicitudin massa tincidunt amet mattis accumsan.</p>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl egestas sollicitudin massa tincidunt amet mattis accumsan.</p>
        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nisl egestas sollicitudin massa tincidunt amet mattis accumsan.</p>
      </div>
  </container-component>
  <footer-component />
</template>

<script>
import ContainerComponent from '../components/ContainerComponent.vue';
import FooterComponent from "../components/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
  NavBar,
  ContainerComponent,
  FooterComponent,
  },
};
</script>

<style>

</style>