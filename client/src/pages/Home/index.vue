<template>
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
<hr align="left" width="1657" size="2" color="#e0d5c9" />
</div>
<div class="span">
<span style="color: white;">Оренда</span> <span style="color: rgb(255, 217, 0);">Преміум</span> <span style="color: white;">Авто</span> 
</div>
<div class="span">
<span style="color: white; display: inline-block;">+380</span> <span style="color: rgb(255, 217, 0); display: inline-block;">(99)4054553</span>
</div>
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
  top: 2.5em;
  left: 2em;
  width: 150px;
  height: 39px;
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
.section {
  padding: 1.5em 0em 0em 20em;
}

.nav-item{
      padding: 1em 1.5em;
}
.nav-link{
  font-family: 'Century Gothic';
  font-size: 15px;
  color: #ffffff;
}
.span{
  font-family: 'Century Gothic';
  font-size: 45px;
  text-align: center;
  font-weight: bold;
}
</style>