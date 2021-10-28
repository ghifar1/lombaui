<template>
  <div class="text-center">
    <p class="font-bold text-4xl" data-aos="zoom-out-down" data-aos-duration="800"><slot name="title-page"></slot></p>
    <p class="my-2 font-light">
      <slot name="keterangan"></slot>
    </p>
    <div class="border-b-2 border-blue-400 h-2 w-20 mt-2 mx-auto my-5" data-aos="flip-left"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>