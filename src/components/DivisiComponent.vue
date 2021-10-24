<template>
  <div class="flex items-center justify-evenly h-96 my-20">
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
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  components: {
    CardComponent,
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