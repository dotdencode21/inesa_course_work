<template>
  <div class="background"></div>
  <div class="home">Home</div>
  <div class="yellow-block"></div>
  <div class="image"></div>
</template>
<script>
export default {};
</script>
<style scoped>
.home{
  color: #e60f0f;
}
.background {
  position: fixed;
  top: 0;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: url('public/city.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}
.yellow-block {
  position: fixed;
  top: 500px;
  width: 100%;
  height: 500px;
  background-color: rgb(255, 217, 0);
}
.image {
  position: fixed;
  top: 16em;
  right: 2em;
  width: 900px;
  height: 402px;
  background-image: url('public/car.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>