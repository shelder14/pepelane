<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./theme/fonts/stylesheet.css";
@import "./theme/styles/mixins.scss";
@import "./theme/styles/variables.scss";
body {
  background: var(--primary-background-color);
  font-family: "Codec Pro";
  font-size: 14px;
  font-weight: 300;
  color: var(--primary-text-color);
  margin: 0;
}
#app {
  min-width: 320px;
}
.container {
  width: calc(100% - 128px);
  max-width: 1312px;
  margin-right: auto;
  margin-left: auto;
  @include media("max", "md") {
    width: calc(100% - 32px);
  }
}
h1 {
  font-size: 40px;
  font-weight: 500;
}
</style>
