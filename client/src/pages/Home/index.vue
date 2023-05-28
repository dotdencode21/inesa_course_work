<template>
  <div class="home-page">
    <introduction-section />
    <adventages-section />
    <cars-rental-section />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    IntroductionSection: defineAsyncComponent(() => import("./Sections/Introduction/index.vue")),
    AdventagesSection: defineAsyncComponent(() => import("./Sections/Adventages/index.vue")),
    CarsRentalSection: defineAsyncComponent(() => import("./Sections/CarsRental/index.vue"))
  }
};
</script>
<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>