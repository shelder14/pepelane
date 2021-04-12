<template>
  <div class="catalog">
    <div class="catalog__controls">
      <div class="catalog__filter">
        <h1 class="catalog__filter-title">Rent</h1>
        <FiltrSelect
          :options="filterOptions"
          @update-type="updateVehincles"
        />
      </div>
      <AddNewVehincle />
    </div>
    <div class="catalog__list">
      <Vehincle v-for="vehicle in vehicles" :key="vehicle.id" v-bind="vehicle" />
    </div>
  </div>
</template>
<script>
import FiltrSelect from "@/components/FiltrSelect.vue";
import Vehincle from "@/components/Vehincle.vue";
import AddNewVehincle from "@/components/AddNewVehincle.vue";

export default {
  name: "Home",
  components: {
    Vehincle,
    FiltrSelect,
    AddNewVehincle,
  },
  data() {
    return {
      vehicles: this.$store.getters.getVehicles(),
      filterOptions: ["whatever", "airship", "helicopter", "rocket", "plane"],
    };
  },
  methods: {
    updateVehincles(type) {
      this.vehicles = this.$store.getters.getVehicles(type);
    },
  },
};
</script>
<style lang="scss">
@import "../theme/styles/mixins.scss";
.catalog {
  background: var(--secondary-background-color);
  border-radius: 48px;
  padding: 56px 64px;
  @include media("max", "md") {
    border-radius: 24px;
    padding: 24px 16px;
    margin: 0 -16px;
  }
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__filter {
    display: flex;
  }
  &__filter-title {
    margin: 0 10px 0 0;
    font-size: 40px;
    @include media("max", "md") {
      font-size: 24px;
    }
  }
  &__controls {
    margin-bottom: 40px;
    @include media("max", "md") {
      margin-bottom: 20px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>