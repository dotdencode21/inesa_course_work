<template>
  <div class="create">
    <div class="create__item">
      <span class="create__item__label">Назва</span>
      <input 
        v-model.trim="createdCar.name"
        type="text"
        placeholder="Назва"
        class="create__item__input"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Серійний номер</span>
      <input 
        v-model.trim="createdCar.serialNumber"
        type="text"
        placeholder="Серійний номер"
        class="create__item__input"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Рік випуску</span>
      <input 
        v-model.trim="createdCar.yearOfManufacture"
        type="text"
        placeholder="Рік випуску"
        class="create__item__input"
        @keypress="handleKeyPress"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Тип коробки передач</span>
      <input 
        v-model.trim="createdCar.gearboxType"
        type="text"
        placeholder="Тип коробки передач"
        class="create__item__input"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Тип палива</span>
      <input 
        v-model.trim="createdCar.fuelType"
        type="text"
        placeholder="Тип палива"
        class="create__item__input"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Категорія</span>
      <input 
        v-model.trim="createdCar.category"
        type="text"
        placeholder="Категорія"
        class="create__item__input"
      />
    </div>
    <div class="create__item">
      <span class="create__item__label">Ціна оренди на годину</span>
      <input 
        v-model.trim="createdCar.pricePerHour"
        type="text"
        placeholder="Ціна оренди на годину"
        class="create__item__input"
        @keypress="handleKeyPress"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createdCar: {
        name: "",
        serialNumber: "",
        yearOfManufacture: "",
        gearboxType: "",
        fuelType: "",
        category: "",
        pricePerHour: ""
      }
    }
  },
  watch: {
    createdCar: {
      handler() {
        this.$emit("created-car", this.createdCar);
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
.create {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.create__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25em;
}
.create__item__label {
  font-size: 1.125em;
  color: var(--black-color);
}
.create__item__input {
  width: 100%;
  padding: 0.5em;
  border: 0.0625em solid #808080;
  border-radius: 0.5em;
}
</style>