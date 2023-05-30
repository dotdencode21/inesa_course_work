<template>
  <div class="delete">
    <span class="delete__message">
      Ви впевнені, що хочете видалити <span class="delete__message__bold">{{ name }}</span> з каталогу?
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
.delete {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.delete__message {
  font-size: 1.25em;
  font-weight: 400;
  color: var(--black-color);
}
.delete__message__bold {
  font-weight: 700;
}
</style>
