<template>
  <container-component>
    <div class="flex items-center justify-between h-96">
    <card-component>
      <template v-slot:card-image>
        <img :src="'../src/assets/code.png'" class="mx-auto" />
      </template>
      <template v-slot:title> Divisi TI </template>
    </card-component>
    <card-component>
      <template v-slot:card-image>
        <img :src="'../src/assets/desain.png'" class="mx-auto" />
      </template>
      <template v-slot:title> Divisi Kreatif </template>
    </card-component>
    <card-component>
      <template v-slot:card-image>
        <img :src="'../src/assets/robot.png'" class="mx-auto" />
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