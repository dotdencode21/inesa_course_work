<template>
  <div class="introduction">
    <div class="introduction__advertising">
      <div class="introduction__advertising__block">
        <span class="introduction__advertising__block__title marked">
          Oренда <span>Преміум</span> Авто
        </span>
        <span class="introduction__advertising__block__phone marked">
          +380 <span>(99)6083233</span>
        </span>
      </div>
    </div>
    <div class="introduction__discount">

    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.introduction {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.introduction__advertising {
  width: 100%;
  min-height: 50rem;
  background-image: url("/city.jpg");
  background-position: center center;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 10em 4em;
}
.introduction__discount {
  width: 100%;
  min-height: 50em;
  background-color: #ffd900;
  padding: 0 4em;
}
.introduction__advertising__block {
  width: 100%;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.introduction__advertising__block__title {
  color: #fff;
  font-size: 4em;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.marked > span {
  color: #ffd900;
}
.introduction__advertising__block__phone {
  color: #fff;
  font-size: 1.75em;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>