<template>
  <div class="relative" id="custom_rounded">
    <div class="grid grid-cols-1 md:grid-cols-2 h-full">
      <div class="flex items-center">
        <div class="mx-10 lg:mx-24">
          <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
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
      class="
        h-1/2
        md:h-2/4
        lg:h-4/5
        absolute
        bottom-0
        right-14
        mr-5
        md:mr-20
        lg:mr-40
      "
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 800px) {
  #custom_rounded {
    border-bottom-right-radius: 100px !important;
    height: 600px;
    background: rgb(67, 68, 68);
    background: linear-gradient(
      90deg,
      rgba(67, 68, 68, 1) 0%,
      rgba(10, 10, 10, 1) 100%
    );
  }
}
</style>