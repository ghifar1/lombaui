<template>
    <div class="flex items-center flex-col md:flex-row flex-grow" id="custom_rounded">
        <div class="m-10 md:m-5">
                <img
                :src="'/img/photoshop.png'"
                class="md:object-scale-down"
                />
          </div>
          <div class="m-10 md:m-5">
            <p class="text-white font-thin ">11 Oktober 2021</p>
            <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">Belajar Adobe Photoshop</p>
            <p class="text-white font-thin ">Author</p>
            <p class="text-white font-medium ">Noval</p>
          </div>
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