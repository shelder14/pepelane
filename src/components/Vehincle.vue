<template>
  <router-link tag="a" :to="'/vehincle/' + id" class="vehincle-item">
    <img :src="preview" :alt="name" class="vehincle-item__img" />
    <div class="vehincle-item__description">
      <div class="vehincle-item__title">
        {{ name }}
      </div>
      <div class="vehincle-item__text">
        {{ description }}
      </div>
      <div class="vehincle-item__price">{{ rent }} $/h</div>
    </div>
  </router-link>
</template> 
<script>
export default {
  name: "Vehincle",
  props: {
    name: String,
    preview: String,
    description: String,
    rent: Number,
    id: String,
  },
};
</script>
<style lang="scss">
@import "../theme/styles/mixins.scss";
.vehincle-item {
  display: flex;
  background: var(--primary-background-color);
  border-radius: 32px;
  margin-bottom: 32px;
  padding: 32px 24px;
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 32px);
  box-sizing: border-box;
  text-decoration: none;
  color: var(--primary-text-color);
  @include media("max", "xl") {
    width: calc(1 / 2 * 100% - (1 - 1 / 2) * 32px);
  }
  @include media("max", "lg") {
    width: 100%;
  }
  &__description {
    display: inline-block;
  }
  &__img {
    border-radius: 24px;
    margin-right: 24px;
    display: inline-block;
    width: 88px;
    height: 88px;
  }
  &__title {
    font-size: 16px;
    margin: 15px 0 10px 0;
    font-weight: 500;
    line-height: 1.2;
  }
  &__text {
    line-height: 18px;
    margin-bottom: 16px;
    color: var(--secondary-text-color);
  }
  &__price {
    color: var(--pink);
  }
}
</style>