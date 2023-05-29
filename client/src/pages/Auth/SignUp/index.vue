<template>
  <div class="sign-up">
    <span class="sign-up__title">
      Реєстрація
    </span>
    <div class="sign-up__form">
      <div class="sign-up__form__username">
        <span class="sign-up__form__username__label">
          Логін
        </span>
        <div class="sign-up__form__username__label-icon">
          <user-icon fill="#808080"/>
          <input 
            v-model="username"
            type="text"
            placeholder="Логін"
            class="sign-up__form__username__input"
          />
        </div>
      </div>
      <div class="sign-up__form__password">
        <span class="sign-up__form__password__label">
          Пароль
        </span>
        <div 
          class="sign-up__form__password__label-icon"
        >
          <key-icon fill="#808080"/>
          <input 
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Пароль"
            class="sign-up__form__password__input"
          />
          <div class="sign-up__form__password__label-icon__eyes" @click="toggleShowPassword">
            <open-eye-icon v-if="showPassword" />
            <close-eye-icon v-else />
          </div>
        </div>
      </div>
      <div class="sign-up__form__age">
        <span class="sign-up__form__age__label">
          Вік
        </span>
        <div 
          class="sign-up__form__age__label-icon"
        >
          <age-icon />
          <input 
            v-model="age"
            type="text"
            placeholder="Вік"
            class="sign-up__form__age__input"
            @keypress="handleKeyPress"
          />
        </div>
      </div>
      <div class="sign-up__form__phone">
        <span class="sign-up__form__phone__label">
          Номер телефону
        </span>
        <div 
          class="sign-up__form__phone__label-icon"
        >
          <phone-icon />
          <input 
            v-model.trim="phone"
            type="tel"
            placeholder="Номер телефону"
            class="sign-up__form__phone__input"
          />
        </div>
      </div>
    </div>
    <div class="sign-up__actions">
      <button 
        class="sign-up__actions__auth-btn"
        @click="handleSignIn"
      >
        <span class="sign-up__actions__auth-btn__label">
          Зареєструватися
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
    PhoneIcon: defineAsyncComponent(() => import("@/components/Icons/Phone.vue")),
    AgeIcon: defineAsyncComponent(() => import("@/components/Icons/Age.vue"))
  },
  data() {
    return {
      username: "",
      password: "",
      age: "",
      phone: "",
      showPassword: false
    }
  },
  methods: {
    ...mapActions("auth", ["signUp"]),
    handleKeyPress(e) {
      if(!/[\d]/g.test(e.key)) e.preventDefault();
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    goToSignUp() {
      this.$emit("go-to-sign-up", true);
    },
    async handleSignIn() {
      try {
        const data = await this.signUp({ 
          username: this.username,
          password: this.password,
          age: +(this.age),
          phone: this.phone
        });

        if (data) {
          this.$emit("go-to-sign-in", false);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
<style scoped>
.sign-up {
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
.sign-up__title {
  font-weight: 700;
  font-size: 1.5em;
  color: var(--black-color);
}
.sign-up__header__subtitle {
  font-weight: 400;
  font-size: 1.25em;
  color: #808080;
}
.sign-up__form {
  margin-top: 1.25em;
  width: 100%;
  min-height: 11em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25em;
}
.sign-up__form__username,
.sign-up__form__password,
.sign-up__form__age,
.sign-up__form__phone {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25em;
}
.sign-up__form__username__label,
.sign-up__form__password__label,
.sign-up__form__age__label,
.sign-up__form__phone__label {
  font-size: 1.125em;
  color: var(--black-color);
}
.sign-up__form__username__input, 
.sign-up__form__age__input,
.sign-up__form__phone__input {
  width: 100%;
  padding: 0.5em 0em;
  border: none;
  border-radius: 0.5em;
}
.sign-up__form__password__input {
  width: 100%;
  padding: 0.5em 0em;
  border: none;
  border-radius: 0.5em;
}
.sign-up__actions {
  margin-top: 1.25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sign-up__actions__auth-btn {
  width: 100%;
  padding: 0.5em 1em;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
}
.sign-up__actions__auth-btn__label {
  font-size: 1.25em;
  font-weight: 700;
  color: var(--black-color);
  letter-spacing: 0.02em;
}
.sign-up__actions__redirect-btn {
  width: 100%;
  padding: 0.5em 1em;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up__actions__redirect-btn__label {
  font-size: 1em;
  font-weight: 400;
  color: #808080;
  text-decoration: underline;
}
.sign-up__form__username__label-icon,
.sign-up__form__age__label-icon,
.sign-up__form__phone__label-icon {
  border: 0.0625em solid #808080;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.5em;
  padding-left: 1em;
}
.sign-up__form__password__label-icon {
  border: 0.0625em solid #808080;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  border-radius: 0.5em;
  padding: 0em 1em;
}
.sign-up__form__password__label-icon__eyes {
  cursor: pointer;
}
</style>