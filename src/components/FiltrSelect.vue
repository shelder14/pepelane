<template>
  <div class="filtr-select" @click="toggleDropdown">
    <span class="filtr-select__block">
      {{ selected }}
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        class="filtr-select__expand"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 8L0 1.99965L2.00094 0L6 4.00071L9.99906 0L12 1.99965L6 8Z"
        />
      </svg>
    </span>
    <transition name="slide">
      <div
        class="filtr-select__dropdown-options-container"
        v-show="showDropdown"
      >
        <div
          class="filtr-select__dropdown-item"
          v-for="(option, index) in options"
          v-bind:class="{ selected: option === selected }"
          :key="index"
        >
          <div
            class="filtr-select__dropdown-option"
            @click="selectOption(option)"
          >
            <span class="filtr-select__dropdown-text">{{ option }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "FiltrSelect",
  data() {
    return {
      selected: "whatever",
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(option) {
      this.selected = option;
      this.$emit("update-type", this.selected);
    },
  },
  props: {
    options: {
      defaut: [],
      type: Array,
    },
  },
};
</script>
<style lang="scss">
@import "../theme/styles/mixins.scss";
.filtr-select {
  cursor: pointer;
  user-select: none;
  transition: all 200ms linear;
  width: 230px;
  @include media("max", "md") {
    width: auto;
  }
  &__block {
    display: inline-block;
    font-size: 40px;
    font-weight: 500;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all 200ms linear;
    color: var(--blue);
    @include media("max", "md") {
      font-size: 24px;
    }
    
  }
  &__dropdown-options-container {
    overflow-y: auto;
    max-height: 215px;
    position: absolute;
    width: 230px;
    background: var(--primary-background-color);
    @include media("max", "md") { 
      width: auto;
    }
  }
  &__expand {
    position: absolute;
    margin: 14px;
    fill: var(--blue);
    @include media("max", "md") {
      margin: 7px;
    }
  }
  &__dropdown-option {
    padding: 15px;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>