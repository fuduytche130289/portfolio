<template>
  <div class="h-[100rem]">
    <div
        class="flex flex-col-reverse md:flex md:flex-row md:justify-between xl:justify-evenly items-center py-[3rem] md:py-[5rem] px-[3rem] md:px-[5rem]">
      <div class="flex flex-col gap-4 lg:p-10">
        <div class="flex flex-col justify-start items-start">
          <div class="flex items-center gap-3">
            <p class="text-[1.5rem] lg:text-[2rem] font-bold text-[#2d2e32] leading-[130%]">Hi, I'm Tran Cong Duy</p>
            <img class="object-cover hidden lg:block md:h-[2rem] md:w-[2rem]"
                 src="../assets/images/waving_hand.png"
                 alt="waving_hand">
          </div>
          <p class="text-[1.5rem] lg:text-[2rem] font-bold text-[#2d2e32] leading-[130%]">A Front-end Developer</p>
        </div>
        <p class="font-[NotoSerif] font-[500] text-[20px]">Living in Ha Noi, Viet Nam. 📍</p>
        <div class="flex justify-center items-center md:justify-start md:items-start gap-4">
          <a href="https://github.com/fuduytche130289" target="_blank">
            <i class="text-[2rem] fa-brands fa-github hover:opacity-60"></i>
          </a>
          <a href="https://www.linkedin.com/in/trancongduy/" target="_blank">
            <i class="text-[2rem] fa-brands fa-linkedin hover:opacity-60"></i>
          </a>
        </div>
      </div>
      <div
          class="hero-img border-[3px] border-solid border-[#2d2e32] h-[21.875rem] md:h-[18rem] lg:h-[21.875rem] relative w-[21.875rem] md:w-[18rem] lg:w-[21.875rem] mb-[2rem] md:mb-0"></div>
    </div>
    <div
        class="flex flex-col md:flex lg:flex-row md:justify-between xl:justify-evenly items-center px-[3rem] md:px-[5rem]">
      <div
          class="px-10 pb-5 mb-8 border-b-2 border-b-gray-400 lg:mb-0 lg:border-r-2 lg:border-r-gray-400 lg:border-b-0">
        <p class="font-bold text-lg text-[#2d2e32]">Tech Stack</p>
      </div>
      <div class="grid grid-cols-3 md:grid-cols-7 gap-4">
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/html5.svg" alt="html5">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto">HTML5</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/css3.svg" alt="css">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto">CSS3</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/js.svg" alt="js">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto">JS</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-contain h-[2.5rem] w-[2.5rem]" src="../assets/images/tailwind.svg" alt="tailwind">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto uppercase">tailwind</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/img_vue.jpg" alt="img_vue">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto uppercase">VUE</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/reactjs.svg" alt="reactjs">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto uppercase">reactjs</span>
        </div>
        <div
            class="col-span-1 group relative flex justify-center items-center bg-white rounded-[50%] shadow-[0_0_10px_rgba(0,0,0,0.09)] h-[5rem] w-[5rem] cursor-pointer">
          <img class="object-cover h-[2.5rem] w-[2.5rem]" src="../assets/images/scss.svg" alt="scss">
          <span class="group-hover:opacity-100 transition-opacity bg-gray-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-[210%] opacity-0 m-4 mx-auto uppercase">scss</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroduceComponent"
}
</script>

<style scoped>
.hero-img {
  background-image: url("../assets/images/456.jpg");
  animation: morph 8s ease-in-out infinite;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  transition: all 1s ease-in-out;

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
}

</style>