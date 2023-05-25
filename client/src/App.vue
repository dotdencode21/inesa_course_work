<template>
  <div class="wrapper">
    <navbar-menu />
    <router-view />
  </div>
</template>
<script>
import NavbarMenu from "./components/Navbar/index.vue";

export default {
  components: {
    NavbarMenu
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>