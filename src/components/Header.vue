<template>
  <div>
    <div class="w-full fixed z-50 bg-white h-[80px] flex justify-between items-center py-[25px] px-[3rem] lg:px-[50px] shadow-md">
      <h3 class="font-[800] text-[20px]">CongDuy.Dev</h3>
      <div class="hidden md:flex items-center">
        <p class="px-5 text-[20px] font-[600] cursor-pointer">Home</p>
        <p class="px-5 text-[20px] font-[600] cursor-pointer">About</p>
        <p class="px-5 text-[20px] font-[600] cursor-pointer">Projects</p>
        <p class="px-5 text-[20px] font-[600] cursor-pointer">Contact</p>
      </div>
      <div @click="handleClose()" class="flex md:hidden items-center">
        <i v-if="isOpen == false" class="text-[20px] cursor-pointer fa-solid fa-bars"></i>
        <i v-if="isOpen == true" class="text-[25px] cursor-pointer fa-solid fa-xmark"></i>
      </div>
    </div>
    <Menu :isOpen="isOpen"/>
  </div>
</template>

<script setup>
import Menu from "@/components/Menu";
import {ref} from "vue";

const isOpen = ref(false)

const handleClose = () => {
  isOpen.value = !isOpen.value;
}

</script>

<style scoped>

</style>