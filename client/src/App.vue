<template>
  <router-view />
</template>
<script>
export default {
  mounted() {
    console.log(this.$store);
    console.log(this.$router);
  }
};
</script>
<style scoped>

</style>