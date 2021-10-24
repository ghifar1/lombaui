<template>
  <div class="mx-10 py-20">
    <div class="grid grid-cols-5">
      <div class="col-span-2 flex items-center justify-end mr-20">
          <div class="bg-abucoklat h-72 w-72 p-5 rounded-3xl shadow-2xl flex justify-center items-center">
              <img :src="'../src/assets/logo.png'" class="w-full p-3" />
          </div>
      </div>
      <div class="col-span-3 mr-20">
        <p class="text-4xl font-bold mt-10">Tentang Kami</p>
        <p class="mt-5 pr-52 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu dolor
          ipsum odio turpis nulla malesuada imperdiet. Dui metus sit pulvinar
          est dictum amet, eu suspendisse neque.
        </p>
        <button id="btn-custom" class="text-white font-medium px-5 py-2 mt-16 rounded-2xl">
          Selengkapnya
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
#btn-custom {
  background-color: #0057FF;
  box-shadow: #0057FF 0px 7px 29px 0px;
}
</style>