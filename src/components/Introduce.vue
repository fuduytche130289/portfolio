<template>
  <div
      class="flex flex-col-reverse md:flex md:flex-row md:justify-between xl:justify-evenly items-center py-[3rem]  md:py-[5rem] px-[3rem] md:px-[5rem]">
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