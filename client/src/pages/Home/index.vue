<template>
  <div class="background"></div>
  <div class="icon"></div>
  <div class="yellow-block"></div>
  <div class="car"></div>
</template>
<script>
export default {};
</script>
<style scoped>
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
.icon {
  position: fixed;
  top: 2em;
  left: 2em;
  width: 200px; /* Измените размеры изображения на подходящие для вашего случая */
  height: 50px;
  background-image: url('public/logo.png');
  background-size: cover;
  background-repeat: round;
  z-index: 1;
}
.yellow-block {
  position: fixed;
  top: 500px;
  width: 100%;
  height: 500px;
  background-color: rgb(255, 217, 0);
}
.car {
  position: fixed;
  top: 14em;
  right: 2em;
  width: 900px;
  height: 408px;
  background-image: url('public/car.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>