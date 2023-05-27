<template>
  <div class="introduction">
    <navbar-menu />
    <div class="introduction__advertising">
      <span class="introduction__advertising__title marked">
        Oренда <span>Преміум</span> Авто
      </span>
      <span class="introduction__advertising__phone marked">
        +380 <span>(99)6083233</span>
      </span>
    </div>
    <div class="introduction__proposal">
      <div class="introduction__proposal__info">
        <span class="introduction__proposal__info__title">
          Mercedes-AMG GT S
        </span>
        <span class="introduction__proposal__info__price marked bold">
          На добу від <span>200 грн</span>
        </span>
        <button class="introduction__proposal__info__rental-btn">
          <span class="introduction__proposal__info__rental-btn__label">
            Орендувати
          </span>
        </button>
      </div>
      <img src="/car.png" alt="car"/>
    </div>
    <div class="introduction__tip">
      <div class="introduction__tip__content">
        <div class="introduction__tip__content__title">
          <span class="introduction__tip__content__title__text">
            Оренда автомобілей
          </span>
          <span class="introduction__tip__content__title__text">
            будь-якого класу та для будь-яких цілей
          </span>
        </div>
        <div class="introduction__tip__content__subtitle">
          <span class="introduction__tip__content__subtitle__text">
            Оберіть для себе машину для подорожі за місто
          </span>
          <span class="introduction__tip__content__subtitle__text">
            або для робочих подорожей
          </span>
        </div>
      </div>
      <button class="introduction__tip__btn">
        <span class="introduction__tip__btn__label">
          Поїхали
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavbarMenu: defineAsyncComponent(() => import("@/components/Navbar/index.vue"))
  }
};
</script>
<style scoped>
.introduction {
  width: 100%;
  min-height: 87.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5em;
  background-image: url("/city.jpg");
  object-fit: contain;
  background-color: var(--main-color);
  background-repeat: no-repeat;
  background-size: 100% 43.75em;
  background-position: center top;
  padding: 0 4em;
}
.introduction__advertising {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 7em;
}
.introduction__advertising__title {
  color: var(--white-color);
  font-size: 2.75em;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.introduction__advertising__phone {
  color: var(--white-color);
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.marked > span {
  color: var(--secondary-color);
}
.bold > span {
  font-weight: 700;
}
.introduction__proposal {
  margin-top: 2.25em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.introduction__proposal__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.introduction__proposal__info__title {
  color: var(--white-color);
  font-size: 2.75em;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.introduction__proposal__info__price {
  color: var(--white-color);
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.introduction__proposal__info__rental-btn {
  margin-top: 2em;
  background-color: var(--main-color);
  border-radius: 1.5em;
  padding: 0.5em 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}
.introduction__proposal__info__rental-btn__label {
  font-size: 1.25em;
  color: var(--black-color);
  font-weight: 600;
  letter-spacing: 0.02em;
}
.introduction__tip {
  margin-top: 5.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;
}
.introduction__tip__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25em;
}
.introduction__tip__content__title,
.introduction__tip__content__subtitle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.introduction__tip__content__title__text {
  font-weight: 700;
  font-size: 2.75em;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.introduction__tip__content__subtitle__text {
  font-weight: 600;
  font-size: 1.25em;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.introduction__tip__btn {
  padding: 0.5em 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  border-radius: 1.5em;
}
.introduction__tip__btn__label {
  font-weight: 700;
  font-size: 1.5em;
  color: var(--white-color);
  letter-spacing: 0.02em;
}
</style>