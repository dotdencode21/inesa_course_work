<template>
  <div class="list">
    <car-card
      v-for="car in cars"
      :key="car._id"
      :car="car"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";

export default {
  components: {
    CarCard: defineAsyncComponent(() => import("./components/Card/index.vue"))
  },
  computed: {
    ...mapState("cars", ["cars"])
  },
};
</script>
<style scoped>
.list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25em;
}
</style>