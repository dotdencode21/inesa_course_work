<template>
  <div class="cars">
    <div class="cars__header">
      <wheel-icon />
      <span class="cars__header__title">
        Прокат авто
      </span>
    </div>
    <div class="cars__content">
      <cars-filters />
      <cars-list />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import { mapActions } from "vuex";

export default {
  components: {
    CarsFilters: defineAsyncComponent(() => import("./Filters/index.vue")),
    CarsList: defineAsyncComponent(() => import("./List/index.vue")),
    WheelIcon: defineAsyncComponent(() => import("@/components/Icons/Wheel.vue"))
  },
  async mounted() {
    try { 
      await this.getCars();
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions("cars", ["getCars"]),
  }
};
</script>
<style scoped>
.cars {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--secondary-light-color);
  padding: 4em 4em 4em 8em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5em;
}
.cars__header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75em;
}
.cars__header__title {
  font-weight: 700;
  font-size: 3.25em;
  color: var(--black-color);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.cars__content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5em;
}
</style>