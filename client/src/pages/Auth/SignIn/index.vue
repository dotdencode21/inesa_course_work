<template>
  <div class="sign-in">
    <div class="sign-in__header">
      <span class="sign-in__header__title">
        Авторизуватися
      </span>
      <span class="sign-in__header__subtitle">
        Увійдіть до свого акаунту, щоб продовжити
      </span>
    </div>
    <div class="sign-in__form">
      <div class="sign-in__form__username">
        <span class="sign-in__form__username__label">
          Логін
        </span>
        <div class="sign-in__form__username__label-icon">
          <user-icon fill="#808080"/>
          <input 
            v-model="username"
            type="text"
            placeholder="Логін"
            class="sign-in__form__username__input"
          />
        </div>
      </div>
      <div class="sign-in__form__password">
        <span class="sign-in__form__password__label">
          Пароль
        </span>
        <div 
          class="sign-in__form__password__label-icon"
        >
          <key-icon fill="#808080"/>
          <input 
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Пароль"
            class="sign-in__form__password__input"
          />
          <div class="sign-in__form__password__label-icon__eyes" @click="toggleShowPassword">
            <open-eye-icon v-if="showPassword" />
            <close-eye-icon v-else />
          </div>
        </div>
      </div>
    </div>
    <div class="sign-in__actions">
      <button 
        class="sign-in__actions__auth-btn"
        @click="handleSignIn"
      >
        <span class="sign-in__actions__auth-btn__label">
          Авторизуватися
        </span>
      </button>
      <button 
        class="sign-in__actions__redirect-btn"
        @click="goToSignUp"
      >
        <span class="sign-in__actions__redirect-btn__label">
          Ще не зареєстровані?
        </span>
      </button>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import { mapActions } from "vuex";

export default {
  components: {
    UserIcon: defineAsyncComponent(() => import("@/components/Icons/User.vue")),
    KeyIcon: defineAsyncComponent(() => import("@/components/Icons/Key.vue")),
    CloseEyeIcon: defineAsyncComponent(() => import("@/components/Icons/CloseEye.vue")),
    OpenEyeIcon: defineAsyncComponent(() => import("@/components/Icons/OpenEye.vue")),
  },
  data() {
    return {
      username: "",
      password: "",
      showPassword: false
    }
  },
  methods: {
    ...mapActions("auth", ["signIn"]),
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    goToSignUp() {
      this.$emit("go-to-sign-up", true);
    },
    async handleSignIn() {
      try {
        await this.signIn({ 
          username: this.username,
          password: this.password
        });

        if (localStorage.getItem("token")) {
          this.$router.push({ path: "/" });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
<style scoped>
.sign-in {
  padding: 2em 4em;
  background-color: var(--white-color);
  border-radius: 1em;
  border: 0.0625em solid var(--gray-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.sign-in__header {
  width: 100%;
  min-height: 4.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.sign-in__header__title {
  font-weight: 700;
  font-size: 1.5em;
  color: var(--black-color);
}
.sign-in__header__subtitle {
  font-weight: 400;
  font-size: 1.25em;
  color: #808080;
}
.sign-in__form {
  margin-top: 1.25em;
  width: 100%;
  min-height: 11em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.sign-in__form__username,
.sign-in__form__password {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25em;
}
.sign-in__form__username__label,
.sign-in__form__password__label {
  font-size: 1.125em;
  color: var(--black-color);
}
.sign-in__form__username__input {
  width: 100%;
  padding: 0.5em 0em;
  border: none;
  border-radius: 0.5em;
}
.sign-in__form__password__input {
  width: 100%;
  padding: 0.5em 0em;
  border: none;
  border-radius: 0.5em;
}
.sign-in__actions {
  margin-top: 1.25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 6em;
}
.sign-in__actions__auth-btn {
  width: 100%;
  padding: 0.5em 1em;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
}
.sign-in__actions__auth-btn__label {
  font-size: 1.25em;
  font-weight: 700;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.sign-in__actions__redirect-btn {
  width: 100%;
  padding: 0.5em 1em;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-in__actions__redirect-btn__label {
  font-size: 1em;
  font-weight: 400;
  color: #808080;
  text-decoration: underline;
}
.sign-in__form__username__label-icon {
  border: 0.0625em solid #808080;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.5em;
  padding-left: 1em;
}
.sign-in__form__password__label-icon {
  border: 0.0625em solid #808080;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.5em;
  padding: 0em 1em;
}
.sign-in__form__password__label-icon__eyes {
  cursor: pointer;
}
</style>