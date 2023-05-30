<template>
  <div class="card">
    <modal-window 
      :is-open="isUpdateCarAction"
      :car="car"
      type="update"
      @close="handleCloseUpdate"
      @updated-car="handleUpdatedCar"
      @submit="handleSubmitUpdateCar"
    />
    <modal-window 
      :is-open="isDeleteCarAction"
      :car="car"
      type="delete"
      @close="handleCloseDelete"
      @submit="handleSubmitDeleteCar"
    />
    <div class="card__header">
      <span class="card__header__title">
        {{ name }}
      </span>
    </div>
    <div class="card__body">
      <div class="card__body__item">
        <span>
          Рік випуску:
        </span>
        <span class="card__body__item__value"> 
          {{ yearOfManufacture }}
        </span>
      </div>
      <div class="card__body__item">
        <span>
          Тип коробки передач: 
        </span>
        <span class="card__body__item__value">
          {{ gearboxType }}
        </span>
      </div>
      <div class="card__body__item">
        <span>
          Тип палива:
        </span>
        <span class="card__body__item__value">
          {{ fuelType }}
        </span>
      </div>
      <div class="card__body__item">
        <span>
          Категорія:
        </span>
        <span class="card__body__item__value">
          {{ category }}
        </span>
      </div>
      <div class="card__body__item">
        <span>Оренда на годину: </span>
        <span class="card__body__item__value">
          {{ pricePerHour }}₴
        </span>
      </div>
    </div>
    <div 
      class="card__footer"
      :style="{ justifyContent: isAdmin ? 'space-between' : 'flex-start' }"
    >
      <div class="card__footer__user-btns">
        <button class="card__footer__user-btns__rent">
          <span class="card__footer__user-btns__rent__label">
            Орендувати
          </span>
        </button>
      </div>
      <div 
        v-if="isAdmin"
        class="card__footer__admin-btns"
      >
        <button 
          class="card__footer__admin-btns__actions"
          @click="toggleShowAdminActions"
        >
          <dots-icon />
          <div
            v-if="showAdminActions"
            class="card__footer__admin-btns__actions__list"
          >
            <button class="update-btn" @click="handleUpdateCar">
              <pen-icon />
              <span class="update-btn__label">Оновити</span>
            </button>
            <button class="delete-btn" @click="handleDeleteCar">
              <trash-icon />
              <span class="delete-btn__label">Видалити</span>
            </button>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    DotsIcon: defineAsyncComponent(() => import("@/components/Icons/Dots.vue")),
    PenIcon: defineAsyncComponent(() => import("@/components/Icons/Pen.vue")),
    TrashIcon: defineAsyncComponent(() => import("@/components/Icons/Trash.vue")),
    ModalWindow: defineAsyncComponent(() => import("@/components/Modal/index.vue"))
  },
  props: {
    car: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showAdminActions: false,
      isDeleteCarAction: false,
      isUpdateCarAction: false,
      updatedCar: {}
    }
  },
  computed: {
    ...mapState("user", ["isAdmin"]),
    name() {
      return this.car.name;
    },
    yearOfManufacture() {
      return this.car.yearOfManufacture;
    },
    gearboxType() {
      return this.car.gearboxType;
    },
    fuelType() {
      return this.car.fuelType;
    },
    category() {
      return this.car.category;
    },
    pricePerHour() {
      return this.car.pricePerHour;
    }
  },
  async mounted() {
    try {
      await this.getCurrentUser({
        token: localStorage.getItem("token")
      });
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions("user", ["getCurrentUser"]),
    ...mapActions("cars", ["updateCar", "deleteCar"]),
    toggleShowAdminActions() {
      this.showAdminActions = !this.showAdminActions;
    },
    handleUpdateCar() {
      this.isUpdateCarAction = true;
    },
    handleDeleteCar() {
      this.isDeleteCarAction = true;
    },
    handleCloseUpdate(close) {
      this.isUpdateCarAction = close;
    },
    handleCloseDelete(close) {
      this.isDeleteCarAction = close;
    },
    handleUpdatedCar(updatedCar) {
      this.updatedCar = updatedCar;
      console.log(this.updatedCar.name);
    },
    async handleSubmitUpdateCar(submit) {
      if (submit) {
        try {
          await this.updateCar({
            carId: this.car._id,
            name: this.updatedCar.name?.length ? this.updatedCar.name : this.car.name,
            yearOfManufacture: this.updatedCar.yearOfManufacture ? +(this.updatedCar.yearOfManufacture) : this.car.yearOfManufacture,
            gearboxType: this.updatedCar.gearboxType?.length ? this.updatedCar.gearboxType : this.car.gearboxType,
            fuelType: this.updatedCar.fuelType?.length ? this.updatedCar.fuelType : this.car.fuelType,
            category: this.updatedCar.category?.length ? this.updatedCar.category : this.car.category,
            pricePerHour: this.updatedCar.pricePerHour ? +(this.updatedCar.pricePerHour) : this.car.pricePerHour,
          });

          this.isUpdateCarAction = false;
        } catch (e) {
          console.error(e);
        } finally {
          this.isUpdateCarAction = false;
        }
      }
    },
    async handleSubmitDeleteCar(submit) {
      if (submit) {
        try {
          await this.deleteCar({
            carId: this.car._id,
          });

          this.isDeleteCarAction = false;
        } catch (e) {
          console.error(e);
        } finally {
          this.isDeleteCarAction = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.card {
  width: 34em;
  min-height: 20em;
  background-color: #EBE9E9;
  border: 0.0625em solid var(--secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.card__header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: 0.0625em solid var(--secondary-color);
}
.card__header__title {
  font-weight: 700;
  font-size: 1.25em;
  color: var(--black-color);
}
.card__footer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em 1em;
  border-top: 0.0625em solid var(--secondary-color);
}
.card__footer__user-btns {
  display: flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75em;
}
.card__footer__user-btns__rent {
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 1.5em;
}
.card__footer__user-btns__rent__label {
  font-weight: 500;
  font-size: 1.125em;
  color: var(--black-color);
}
.card__footer__admin-btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card__footer__admin-btns__actions {
  position: relative;
  width: 3em;
  height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #CED3DC;
  border-radius: 50%;
}
.card__footer__admin-btns__actions__list {
  z-index: 1;
  position: absolute;
  top: 55%;
  left: -100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white-color);
}
.update-btn,
.delete-btn {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
}
.update-btn__label,
.delete-btn__label {
  font-weight: 500;
  font-size: 1.25em;
  color: var(--black-color);
}
.update-btn:hover,
.delete-btn:hover {
  background-color: rgba(0, 0, 0, 0.25);
}
.card__body {
  padding: 0.5em 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.card__body__item {
  width: 100%;
  padding: 0.25em 0.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}
.card__body__item__value {
  font-size: 1em;
  font-weight: 700;
  color: var(--black-color);  
}
</style>