<template>
  <container-component>
    <div class="flex justify-between">
      <div class="mb-10">
        <p class="text-4xl font-bold mb-2">Kepengurusan</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <button
          id="btn-custom"
          class="text-white font-bold px-6 py-4 rounded-2xl"
        >
          <router-link to="/kepengurusan">
            Lihat Kepengurusan
          </router-link>
        </button>
      </div>
    </div>
    <div class="flex flex-wrap h-full justify-between items-center gap-10">
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