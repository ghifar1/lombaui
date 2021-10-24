<template>
  <container-component>
    <div class="text-center">
      <p class="text-4xl font-bold mb-10">Event Yang Akan Datang</p>
    </div>
    <div class="bg-abucoklat rounded-3xl">
      <div class="grid grid-cols-3 p-7">
        <div class="col-span-1 flex items-center justify-center">
          <div
            class="
              h-64
              w-64
              p-5
              rounded-3xl
              shadow-2xl
              flex
              justify-center
              items-center
            "
            id="card-logo"
          >
            <img :src="'../src/assets/logo.png'" class="w-full p-3" />
          </div>
        </div>
        <div class="col-span-2">
          <div class="grid grid-rows-3 h-full">
            <div class="row-span-2 text-white">
              <div class="flex items-center h-full">
                <div>
                  <p class="font-medium text-3xl">MB Tournament</p>
                  <p class="font-light mt-2 leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    dolor ipsum odio turpis nulla malesuada imperdiet. Dui metus
                    sit pulvinar est dictum amet, eu suspendisse neque.
                  </p>
                </div>
              </div>
            </div>
            <div class="row-span-1">
              <button
                id="btn-card"
                class="
                  font-bold
                  px-6
                  py-4
                  rounded-2xl
                  border-2
                  custom-btn-border
                  text-blue-400
                "
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container-component>
</template>

<script>
import ContainerComponent from "../ContainerComponent.vue";

export default {
  components: {
    ContainerComponent,
  },
};
</script>

<style>
#card-logo {
  background-color: #00a3ff;
}

.custom-btn-border {
  border-color: #0057ff;
}
</style>