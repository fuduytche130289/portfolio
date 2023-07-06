<template>
  <div :class="!isOpen ? 'hidden' : ''">
    <div class="absolute z-20 w-full bg-white flex flex-col py-[15px] px-[40px]">
      <div class="px-[10px] rounded-md hover:bg-gray-200 cursor-pointer py-[5px]">
        <p class="text-[18px] font-[500]">Home</p>
      </div>
      <div class="px-[10px] rounded-md hover:bg-gray-200 cursor-pointer py-[5px]">
        <p class="text-[18px] font-[500]">About</p>
      </div>
      <div class="px-[10px] rounded-md hover:bg-gray-200 cursor-pointer py-[5px]">
        <p class="text-[18px] font-[500]">Projects</p>
      </div>
      <div class="px-[10px] rounded-md hover:bg-gray-200 cursor-pointer py-[5px]">
        <p class="text-[18px] font-[500]">Contact</p>
      </div>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
defineProps({
  // eslint-disable-next-line vue/require-prop-type-constructor
  isOpen: false
});
</script>

<style scoped>

</style>