<template>
  <container-component>
    <title-page-component>
      <template v-slot:title-page>Kepengurusan</template>
      <template v-slot:keterangan
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</template
      >
    </title-page-component>
    <div class="flex flex-wrap justify-center md:justify-between items-center gap-10 mt-10">
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

    <div class="py-32">
      <p class="font-bold text-4xl">Divisi IT</p>
      <div class="border-b-2 border-blue-400 h-2 w-20 mt-2 my-5"></div>
      <p class="font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
        pretium lorem orci, pretium. Massa pellentesque risus, pellentesque mi
        a, nunc egestas venenatis :
      </p>
      <ul class="list-disc list-inside font-light">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </ul>
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-10 mt-10">
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
    </div>
  </container-component>
  <footer-component />
</template>

<script>
import ContainerComponent from "../components/ContainerComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProfileCardComponent from "../components/ProfileCardComponent.vue";
import TitlePageComponent from "../components/TitlePageComponent.vue";
export default {
  components: {
    TitlePageComponent,
    ContainerComponent,
    ProfileCardComponent,
    FooterComponent,
  },
};
</script>

<style>
</style>