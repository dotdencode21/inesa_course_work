<template>
  <div class="wrapper">
    <router-view />
    <button 
      class="btn-scroll"
      :class="{ 'btn-scroll__show': showScrollBtn }"
      @click="scrollToTop"
    >
      <div>
        <arrow-up-icon fill="var(--white-color)" />
      </div>
    </button>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    ArrowUpIcon: defineAsyncComponent(() => import("@/components/Icons/ArrowUp.vue"))
  },  
  data() {
    return {
      showScrollBtn: false
    }
  },  
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showScrollBtn = true;
      } else {
        this.showScrollBtn = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  height: 100%;
}
.btn-scroll {
  display: none;
  position: fixed;
  bottom: 7.5%;
  right: 2.5%;
  width: 3.375em;
  height: 3.375em;
  border-radius: 50%;
  background-color: var(--black-color);
}
.btn-scroll__show {
  display: block;
}
</style>