<template>
  <div class="home-page">
    <introduction-section />
    <adventages-section />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    IntroductionSection: defineAsyncComponent(() => import("./Sections/Introduction/index.vue")),
    AdventagesSection: defineAsyncComponent(() => import("./Sections/Adventages/index.vue"))
  }
};
</script>
<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
<!-- <template>
  <div class="background"></div>
  <div class="section">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="/" >ГОЛОВНА</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">НАШІ ПЕРЕВАГИ</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">ПРОКАТ АВТО</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">ВІДГУКИ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">ПИТАННЯ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">КОНТАКТИ</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="">МІЙ ПРОФІЛЬ</a>
  </li>
    </ul>
</div>

<div class="span">
  <span style="color: white;">Оренда</span> <span style="color: rgb(255, 217, 0);">Преміум</span> <span style="color: white;">Авто</span> 
</div>
<div class="number">
  <span style="color: white; display: inline-block;">+380</span> <span style="color: rgb(255, 217, 0); display: inline-block;">(99)6083233</span>
</div>
<p class="txt">Mercedes-AMG GT S</p>
<p style="color: white; display: inline-block; font-size: 35px; margin: 0em 0em 0em 1.5em;">На добу від </p> <p style="color: rgb(255, 217, 0); display: inline-block; font-size: 35px; margin-left: 8px;"> 200 грн</p>

<button class="btn-rent">
  <span class="btn-rent__label">
      ОРЕНДУВАТИ
  </span>
</button>

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
  background-image: url('city.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
}
.icon {
  position: fixed;
  top: 2.5em;
  left: 3em;
  width: 150px;
  height: 39px;
  background-image: url('logo.png');
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
  background-image: url('car.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
.section {
  padding: 1.5em 0em 0em 20em;
}

.nav-item{
      padding: 1em 1.5em;
}
.nav-link{
  font-size: 15px;
  color: #ffffff;
}
.span{
  font-family: 'Century Gothic';
  font-size: 45px;
  text-align: center;
  font-weight: bold;
}
.number{
  font-family: 'Century Gothic';
  font-size: 25px;
  text-align: center;
  margin: 0em 1em 3em;
}
.txt{
  font-family: 'Century Gothic';
  color: #ffffff;
  font-size: 35px;
  margin: 0em 0em 0em 1.5em;
  font-weight: bold;
}
.btn-rent {
  background: rgb(255, 217, 0);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  margin: 0em 0em 0em 3em;
  padding: 0 16px;
}
.btn-rent__label {
  color: black;
  font-weight: 400;
  font-weight: bold;
}
</style> -->