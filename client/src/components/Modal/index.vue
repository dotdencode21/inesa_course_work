<template>
  <div v-if="isOpen" class="modal">
    <div class="modal__wrapper">
      <div class="modal__header">
        <button @click="handleClose">
          <close-icon />
        </button>
      </div>
      <div class="modal__body">
        <delete-body v-if="type === 'delete'" :name="car.name"/>
        <update-body v-if="type === 'update'" :car="car" @updated-car="handleUpdatedCar"/>
        <create-body v-if="type === 'create'" @created-car="handleCreatedCar"/>
        <rent-body v-if="type === 'rent'" :name="car.name" />
      </div>
      <div class="modal__footer">
        <button class="submit-btn" @click="handleSubmit">
          <span class="submit-btn__label">Підтвердити</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CloseIcon: defineAsyncComponent(() => import("@/components/Icons/Close.vue")),
    DeleteBody: defineAsyncComponent(() => import("./Body/Delete.vue")),
    UpdateBody: defineAsyncComponent(() => import("./Body/Update.vue")),
    CreateBody: defineAsyncComponent(() => import("./Body/Create.vue")),
    RentBody: defineAsyncComponent(() => import("./Body/Rent.vue"))
  },
  props: {
    car: {
      type: Object,
      default: null
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClose() {
      this.$emit("close", false);
    },
    handleSubmit() {
      this.$emit("submit", true);
    },
    handleUpdatedCar(updatedCar) {
      this.$emit("updated-car", updatedCar);
    },
    handleCreatedCar(createdCar) {
      this.$emit("created-car", createdCar);
    }
  }
};
</script>
<style scoped>
.modal {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white-color);
  border-radius: 1.5em;
}
.modal__header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: 0.0625em solid var(--black-color);
}
.modal__header > button {
  background-color: transparent;
}
.modal__footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em 1em;
  border-top: 0.0625em solid var(--black-color);
}
.submit-btn {
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 1.5em;
}
.submit-btn__label {
  font-weight: 500;
  font-size: 1.125em;
  color: var(--black-color);
}
.modal__body {
  padding: 0.5em 1em;
}
</style>