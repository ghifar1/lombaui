<template>
  <container-component>
    <div>
      <p class="text-4xl font-bold mb-10">Kepengurusan</p>
    </div>
    <div class="flex justify-between items-center">
      <profile-card-component>
        <template v-slot:jabatan> Ketua </template>
      </profile-card-component>
      <profile-card-component>
        <template v-slot:jabatan> Wakil Ketua </template>
      </profile-card-component>
      <profile-card-component>
        <template v-slot:jabatan> Sekretaris </template>
      </profile-card-component>
    </div>
  </container-component>
</template>

<script>
import ProfileCardComponent from "../ProfileCardComponent.vue";
import ContainerComponent from "../ContainerComponent.vue";
export default {
  components: {
    ProfileCardComponent,
    ContainerComponent,
  },
};
</script>

<style>
</style>