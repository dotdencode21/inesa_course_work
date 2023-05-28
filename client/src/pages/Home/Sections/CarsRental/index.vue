<template>
  <div class="cars-rental">
    <span class="cars-rental__title">
      Як взяти авто у прокат?
    </span>
    <div class="cars-rental__steps">
      <div
        v-for="(step, stepIndex) in rentalSteps"
        :key="stepIndex"
        class="cars-rental__steps__item"
        :class="{ 'cars-rental__steps__item__right': stepIndex % 2 !== 0 }"
      >
        <div class="cars-rental__steps__item__title-wrapper">
          <div class="cars-rental__steps__item__title-wrapper__index">
            <span>
              {{ stepIndex + 1 }}
            </span>
          </div>
          <span class="cars-rental__steps__item__title-wrapper__title">
            {{ step.title }}
          </span>
        </div>
        <div class="cars-rental__steps__item__subtitle-wrapper">
          <span 
            class="cars-rental__steps__item__subtitle-wrapper__subtitle"
          >
            {{ step.subtitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    rentalSteps() {
      return [
        {
          title: "Обрати",
          subtitle: "Обрати авто на сайті"
        },
        {
          title: "Подзвонити",
          subtitle: "Подзвонити нам або залишити заявку"
        },
        {
          title: "Надіслати",
          subtitle: "Надіслати документы (Паспорт або водійське посвідчення) на нашу пошту carsrent@gmail.com або на Viber +380(99)6083233"
        },
        {
          title: "Отримати",
          subtitle: "Отримати автомобіль. Ви можете приїхати за автомобілем самостійно або замовити доставку у зручний для вас час та місце"
        },
      ];
    }
  }
};
</script>
<style scoped>
.cars-rental {
  width: 100%;
  min-height: 25em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25em;
  padding: 5em 4em 6em;
  background-color: var(--gray-color);
}
.cars-rental__title {
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black-color);
  font-size: 3em;
  letter-spacing: 0.02em;
}
.cars-rental__steps {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.cars-rental__steps__item {
  width: 100%;
  min-height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20em;
}
.cars-rental__steps__item__right {
  align-items: flex-end;
}
.cars-rental__steps__item__title-wrapper {
  min-width: 30em;
  padding: 1em 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  border-bottom: 0.125em solid var(--black-color);
}
.cars-rental__steps__item__title-wrapper__index {
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 50%;
}
.cars-rental__steps__item__title-wrapper__index > span {
  font-weight: 700;
  font-size: 1.25em;
  color: var(--black-color);
}
.cars-rental__steps__item__title-wrapper__title {
  font-weight: 700;
  font-size: 1.75em;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.cars-rental__steps__item__subtitle-wrapper {
  padding-top: 1em;
  width: 30em;
}
.cars-rental__steps__item__subtitle-wrapper__subtitle {
  font-weight: 400;
  font-size: 1.25em;
  color: var(--black-color);
}
</style>