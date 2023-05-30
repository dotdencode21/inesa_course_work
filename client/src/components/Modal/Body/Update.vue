<template>
  <div class="update">
    <div class="update__item">
      <span class="update__item__label">Назва</span>
      <input 
        v-model.trim="updatedCar.name"
        type="text"
        :placeholder="car.name"
        class="update__item__input"
      />
    </div>
    <div class="update__item">
      <span class="update__item__label">Рік випуску</span>
      <input 
        v-model.trim="updatedCar.yearOfManufacture"
        type="text"
        :placeholder="car.yearOfManufacture"
        class="update__item__input"
        @keypress="handleKeyPress"
      />
    </div>
    <div class="update__item">
      <span class="update__item__label">Тип коробки передач</span>
      <input 
        v-model.trim="updatedCar.gearboxType"
        type="text"
        :placeholder="car.gearboxType"
        class="update__item__input"
      />
    </div>
    <div class="update__item">
      <span class="update__item__label">Тип палива</span>
      <input 
        v-model.trim="updatedCar.fuelType"
        type="text"
        :placeholder="car.fuelType"
        class="update__item__input"
      />
    </div>
    <div class="update__item">
      <span class="update__item__label">Категорія</span>
      <input 
        v-model.trim="updatedCar.category"
        type="text"
        :placeholder="car.category"
        class="update__item__input"
      />
    </div>
    <div class="update__item">
      <span class="update__item__label">Ціна оренди на годину</span>
      <input 
        v-model.trim="updatedCar.pricePerHour"
        type="text"
        :placeholder="car.pricePerHour"
        class="update__item__input"
        @keypress="handleKeyPress"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      updatedCar: {
        name: "",
        yearOfManufacture: "",
        gearboxType: "",
        fuelType: "",
        category: "",
        pricePerHour: ""
      }
    }
  },
  watch: {
    updatedCar: {
      handler() {
        this.$emit("updated-car", this.updatedCar);
      },
      deep: true
    }
  },
  methods: {
    handleKeyPress(e) {
      if(!/[\d]/g.test(e.key)) e.preventDefault();
    },
  }
};
</script>
<style scoped>
.update {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.update__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25em;
}
.update__item__label {
  font-size: 1.125em;
  color: var(--black-color);
}
.update__item__input {
  width: 100%;
  padding: 0.5em;
  border: 0.0625em solid #808080;
  border-radius: 0.5em;
}
</style>