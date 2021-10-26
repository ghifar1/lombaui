<template>
  <div id="card-profile" class="relative rounded-3xl text-white shadow-2xl">
      <img :src="'/img/orang.png'" class="absolute bottom-0 object-cover rounded-3xl">
      <div id="bg-name" class="absolute bottom-0 w-full rounded-3xl p-3 text-center">
          <p class="font-medium text-2xl my-1">Aimbot</p>
          <p class="font-light my-2"><slot name="jabatan"></slot></p>
          <img :src="'/img/ig_outline.png'" class="mx-auto w-7 h-7 my-2"/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#card-profile {
  width: 300px;
  height: 410px;
  background-color: #1B1B1B;
}

#bg-name {
    background-color: rgba(27, 27, 27, 0.5);
}
</style>