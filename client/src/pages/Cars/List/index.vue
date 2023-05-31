<template>
  <div class="list">
    <modal-window 
      :is-open="isCreateCarAction"
      type="create"
      @close="handleCloseCreate"
      @created-car="handleCreatedCar"
      @submit="handleSubmitCreateCar"
    />
    <car-card
      v-for="car in cars"
      :key="car._id"
      :car="car"
    />
    <button
      v-if="isAdmin"
      class="btn__add"
      @click="handleCreateCar"
    > 
      <plus-icon />
    </button>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      isCreateCarAction: false,
      createdCar: {}
    }
  },
  components: {
    CarCard: defineAsyncComponent(() => import("./components/Card/index.vue")),
    PlusIcon: defineAsyncComponent(() => import("@/components/Icons/Plus.vue")),
    ModalWindow: defineAsyncComponent(() => import("@/components/Modal/index.vue"))
  },
  computed: {
    ...mapState("cars", ["cars"]),
    ...mapState("user", ["isAdmin"])
  },
  async created() {
    try {
      await this.getCurrentUser({
        token: localStorage.getItem("token")
      });
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions("cars", ["createCar"]),
    ...mapActions("user", ["getCurrentUser", "updateCurrentUser"]),
    handleCreateCar() {
      this.isCreateCarAction = true;
    },
    handleCloseCreate(close) {
      this.isCreateCarAction = close;
    },
    handleCreatedCar(createdCar) {
      this.createdCar = createdCar;
    },
    async handleSubmitCreateCar(submit) {
      if (submit) {
        try {
          await this.createCar({
            name: this.createdCar.name,
            serialNumber: this.createdCar.serialNumber,
            yearOfManufacture: +(this.createdCar.yearOfManufacture),
            gearboxType: this.createdCar.gearboxType,
            fuelType: this.createdCar.fuelType,
            category: this.createdCar.category,
            pricePerHour: +(this.createdCar.pricePerHour)
          });

          this.isCreateCarAction = false;
        } catch (e) {
          console.error(e);
        } finally {
          this.isCreateCarAction = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25em;
}
.btn__add {
  width: 10em;
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: 50%;
}
</style>