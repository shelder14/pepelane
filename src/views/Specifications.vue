<template>
  <div>
    <div class="types__text">
      {{ specificationsText }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Specifications",
  props: {
    specificationsText: String,
  },
};
</script>
<style lang="scss">
.types__text {
  color: var(--secondary-text-color);
  line-height: 20px;
  margin-bottom: 32px;
}
.types__title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
}
.features {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  &__icon {
    width: 80px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary-background-color);
    border-radius: 16px;
  }
  &__description {
    width: calc(100% - 104px);
    margin-left: 24px;
  }
  &__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  &__text {
    color: var(--secondary-text-color);
    line-height: 20px;
  }
}
</style>