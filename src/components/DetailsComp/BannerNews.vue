<template>
    <div class="relative" id="custom_rounded">
        <div class="grid grid-cols-2">
            <div>
                <img
                :src="'/img/photoshop.png'"
                class="mt-10 m-40 h-256"
                />
            </div>
            <div class="m-20">
            <p class="mt-5 text-white font-thin ">11 Oktober 2021</p>
            <p class="text-6xl font-bold text-blue-400">Belajar Adobe Photoshop</p>
            <p class="mt-5 text-white font-thin ">Author</p>
            <p class="mt-5 text-white font-medium ">Noval</p>
            </div>
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