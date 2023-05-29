<template>
  <div class="auth">
    <div class="auth__label left">
      <span class="auth__label__text left-text">
        Cars
      </span>
    </div>
    <sign-up-form 
      v-if="goToSignUp"
      @go-to-sign-in="handleGoToSignIn"
    />
    <sign-in-form 
      v-else
      @go-to-sign-up="handleGoToSignUp"
    />
    <div class="auth__label right">
      <span class="auth__label__text right-text">
        Rent
      </span>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    SignInForm: defineAsyncComponent(() => import("@/pages/Auth/SignIn/index.vue")),
    SignUpForm: defineAsyncComponent(() => import("@/pages/Auth/SignUp/index.vue")),
  },
  data() {
    return {
      goToSignUp: false,
    }
  },
  methods: {
    handleGoToSignUp(goToSignUp) {
      this.goToSignUp = goToSignUp;
    },
    handleGoToSignIn(goToSignUp) {
      this.goToSignUp = goToSignUp;
    }
  }
};
</script>
<style scoped>
.auth {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background-color: var(--main-color);
}
.auth__label {
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
}
.left {
  justify-content: flex-end;
  padding-bottom: 10em;
}
.right {
  justify-content: flex-start;
  padding-top: 10em;
}
.auth__label__text {
  font-weight: 700;
  font-size: 10em;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.left-text {
  color: var(--white-color);
}
.right-text {
  color: var(--black-color);
}
</style>