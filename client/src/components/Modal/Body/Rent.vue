<template>
  <div class="rent">
    <span class="rent__message">
      Підтвердити оренду <span class="rent__message__bold">{{ name }}</span>? 
    </span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.rent {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.rent__message {
  font-size: 1.25em;
  font-weight: 400;
  color: var(--black-color);
}
.rent__message__bold {
  font-weight: 700;
}
</style>