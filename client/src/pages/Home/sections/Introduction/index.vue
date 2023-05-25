<template>
  <div class="introduction">
    <div class="introduction__advertising">

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
  min-height: 37.5em;
  background-image: url("/city.jpg");
  background-position: center center;
  object-fit: cover;
  background-repeat: no-repeat;
  padding: 0 4em;
}
.introduction__discount {
  width: 100%;
  min-height: 37.5em;
  background-color: #ffd900;
  padding: 0 4em;
}
</style>