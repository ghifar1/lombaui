<template>
  <div class="grid grid-rows-3 rounded-3xl p-10 text-white shadow-2xl" id="card">
    <div>
      <slot name="card-image"> </slot>
      <p class="text-center text-xl font-bold uppercase mt-2">
        <slot name="title"> </slot>
      </p>
    </div>
    <div class="row-span-2 flex items-center justify-center h-full">
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        fermentum, lobortis sit neque.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#card {
  width: 300px;
  height: 400px;
  background-color: #3f3f3f;
}
</style>