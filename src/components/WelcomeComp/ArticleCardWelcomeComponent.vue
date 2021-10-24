<template>
  <div id="card-article-welcome" class="relative rounded-3xl shadow-2xl">
    <div
      class="absolute bottom-0 w-full rounded-3xl p-6 text-white"
      style="background-color: #00a3ff"
    >
      <p class="font-bold text-xl"><slot name="artikel-title"></slot></p>
      <p class="font-light"><slot name="artikel-teks"></slot></p>
    </div>
    <div class="w-28 mx-auto mt-20 shadow-2xl rounded-full">
      <slot name="artikel-gambar"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#card-article-welcome {
  width: 350px;
  height: 400px;
  background-color: #3f3f3f;
}
</style>