<template>
  <div class="card">
    <div class="card__header">
      <span class="card__header__title">
        {{ name }}
      </span>
    </div>
    <div class="card__body">

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
        <button class="card__footer__user-btns__more">
          <span class="card__footer__user-btns__more__label">
            Детальніше
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
            <span>123</span>
            <span>123</span>
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
    DotsIcon: defineAsyncComponent(() => import("@/components/Icons/Dots.vue"))
  },
  props: {
    car: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      currentCar: {},
      showAdminActions: false
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
    toggleShowAdminActions() {
      this.showAdminActions = !this.showAdminActions;
    }
  }
};
</script>
<style scoped>
.card {
  width: 27.5em;
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
.card__footer__user-btns__more {
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #345995;
  border-radius: 1.5em;
}
.card__footer__user-btns__rent__label {
  font-weight: 500;
  font-size: 1.125em;
  color: var(--black-color);
}
.card__footer__user-btns__more__label {
  font-weight: 500;
  font-size: 1.125em;
  color: var(--white-color);
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
  position: absolute;
  top: 50%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white-color);
}
</style>