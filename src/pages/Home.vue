<template>
  <div>
    <Header/>
    <div class="container">
      <IntroduceComponent/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import IntroduceComponent from "@/components/Introduce";

export default {
  name: "HomePage",
  components: {
    Header, IntroduceComponent
  }

}
</script>

<style scoped>

</style>