<template>
  <container-component data-aos="fade-up">
    <div class="flex flex-wrap items-center justify-center md:justify-between gap-5 h-full">
    <card-component>
      <template v-slot:card-image>
        <img :src="'/img/code.png'" class="mx-auto" />
      </template>
      <template v-slot:title> Divisi TI </template>
    </card-component>
    <card-component>
      <template v-slot:card-image>
        <img :src="'/img/desain.png'" class="mx-auto" />
      </template>
      <template v-slot:title> Divisi Kreatif </template>
    </card-component>
    <card-component>
      <template v-slot:card-image>
        <img :src="'/img/robot.png'" class="mx-auto" />
      </template>
      <template v-slot:title> Divisi Litbang </template>
    </card-component>
  </div>
  </container-component>
</template>

<script>
import CardComponent from "../CardComponent.vue";
import ContainerComponent from "../ContainerComponent.vue";

export default {
  components: {
    CardComponent,
    ContainerComponent
  },
};
</script>

<style>
#card {
  width: 300px;
  height: 400px;
  background-color: #3f3f3f;
}
</style>