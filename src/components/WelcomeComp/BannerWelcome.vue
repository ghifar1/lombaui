<template>
  <div class="relative" id="custom_rounded">
    <div class="grid grid-cols-2 h-full">
      <div class="flex items-center">
        <div class="mx-24">
          <p class="text-6xl font-bold text-blue-400">
            Senangnya Berorganisasi Seperti Berkeluarga
          </p>
          <p class="mt-5 text-white font-light">
            Berorganisasi sekaligus mempelajari hal-hal baru dan dapat membangun
            relasi antar sesama
          </p>
        </div>
      </div>
      <div></div>
    </div>
    <img
      :src="'/img/foto_header.png'"
      class="h-4/5 absolute bottom-0 right-14 mr-40"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
#custom_rounded {
  border-bottom-right-radius: 200px;
  height: 600px;
  background: rgb(67, 68, 68);
  background: linear-gradient(
    90deg,
    rgba(67, 68, 68, 1) 0%,
    rgba(10, 10, 10, 1) 100%
  );
}
</style>