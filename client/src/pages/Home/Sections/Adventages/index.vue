<template>
  <div class="adventages">
    <span class="adventages__title">
      Чому обирають саме нас?
    </span>
    <div class="adventages__points">
      <div
        v-for="(adventage, adventageIndex) in adventages"
        :key="adventageIndex"
        class="adventages__points__item"
      >
        <div class="adventages__points__item__logo">
          <star-icon v-if="adventage.title === 'Вигідно'"/>
          <sand-clock-icon v-if="adventage.title === 'Швидко'"/>
          <shield-icon v-if="adventage.title === 'Безпечно'"/>
        </div>
        <div class="adventages__points__item__description">
          <span class="adventages__points__item__description__title">
            {{ adventage.title }}
          </span>
          <span class="adventages__points__item__description__subtitle">
            {{ adventage.subtitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    StarIcon: defineAsyncComponent(() => import("@/components/Icons/Star.vue")),
    SandClockIcon: defineAsyncComponent(() => import("@/components/Icons/SandClock.vue")),
    ShieldIcon: defineAsyncComponent(() => import("@/components/Icons/Shield.vue")),
  },
  computed: {
    adventages() {
      return [
        {
          title: "Вигідно",
          subtitle: "Плата за оренду йде лише за кількість днів"
        },
        {
          title: "Швидко",
          subtitle: "Оформлення оренди всього за 10 хвилин"
        },
        {
          title: "Безпечно",
          subtitle: "Усі машини застраховані та в чудовому стані"
        },
      ];
    }
  }
};
</script>
<style scoped>
.adventages {
  width: 100%;
  min-height: 28.125em;
  background-color: var(--white-color);
  padding: 5em 4em 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.adventages__title {
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black-color);
  font-size: 3em;
  letter-spacing: 0.02em;
}
.adventages__points {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.adventages__points__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5em;
}
.adventages__points__item__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 50%;
  padding: 1.5em;
}
.adventages__points__item__description {
  width: 13em;
  height: 7.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.adventages__points__item__description__title {
  font-weight: 700;
  font-size: 2em;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.adventages__points__item__description__subtitle {
  font-weight: 500;
  font-size: 1em;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
</style>