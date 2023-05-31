<template>
  <div class="account">
    <button class="back__btn" @click="backToMain">
      <span class="back__btn__label">
        На головну
      </span>
    </button>
    <div class="account__header">
      <account-icon />
      <span class="account__header__title">
        Особистий кабінет
      </span>
    </div>
    <div class="account__content__wrapper">
      <div class="account__content">
        <div class="account__content__info">
          <div class="account__content__info__item">
            <span class="account__content__info__item__label">Логін:</span>
            <span class="account__content__info__item__label__bold">{{ currentUser.username }}</span>
          </div>
          <div class="account__content__info__item">
            <span class="account__content__info__item__label">Вік:</span>
            <span class="account__content__info__item__label__bold">{{ currentUser.age }}</span>
          </div>
          <div class="account__content__info__item">
            <span class="account__content__info__item__label">Номер телефону:</span>
            <span class="account__content__info__item__label__bold">{{ currentUser.phoneNumber }}</span>
          </div>
          <div class="account__content__info__item">
            <span class="account__content__info__item__label">Тип:</span>
            <span class="account__content__info__item__label__bold">{{ currentUser.role === "ADMIN" ? "Адміністратор" : "Користувач" }}</span>
          </div>
          <div class="account__content__info__item">
            <span class="account__content__info__item__label">Кількість оренд:</span>
            <span class="account__content__info__item__label__bold">{{ currentUser.orders?.length }}</span>
          </div>
        </div>
      </div>
      <button class="btn__sign-out" @click="signOut">
        <span class="btn__sign-out__label">
          Вийти з акканту
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    AccountIcon: defineAsyncComponent(() => import("@/components/Icons/Account.vue"))
  },
  computed: {
    ...mapState("user", ["currentUser"]),
  },
  async mounted() {
    try {
      await this.getCurrentUser({
        token: localStorage.getItem("token")
      });
    } catch (e) {
      console.error(e);
    }
  },
  async mounted() {
    try {
      await this.getCurrentUser({
        token: localStorage.getItem("token")
      });
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions("user", ["getCurrentUser"]),
    backToMain() {
      this.$router.push({ path: "/" });
    },
    signOut() {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        this.backToMain();
      }
    }
  }
};
</script>
<style scoped>
.account {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--main-color);
  padding: 4em 4em 4em 8em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5em;
}
.account__header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75em;
}
.account__header__title {
  font-weight: 700;
  font-size: 3.25em;
  color: var(--black-color);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.account__content__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.account__content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back__btn {
  padding: 1em 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-light-color);
  border-radius: 1.5em;
}
.back__btn__label {
  font-weight: 500;
  font-size: 1.25em;
  color: var(--black-color);
}
.account__content__info {
  margin-top: 5em;
  width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--gray-color);
  border-radius: 1.5em;
}
.account__content__info__item {
  padding: 0.5em 1em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  border-bottom: 0.0625em solid var(--black-color);
}
.account__content__info__item:last-child {
  border-bottom: none;
}
.account__content__info__item__label {
  font-size: 1.25em;
  font-weight: 500;
  color: var(--black-color);
}
.account__content__info__item__label__bold {
  font-weight: 700;
}
.btn__sign-out {
  width: 30em;
  padding: 0.5em 1em;
  background-color: var(--secondary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
}
.btn__sign-out__label {
  font-size: 1.25em;
  font-weight: 700;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
</style>