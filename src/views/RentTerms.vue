<template>
  <div class="types__text">
    {{ termText }}
    RentTerms
  </div>
</template>
<script>
export default {
  name: "RentTerms",
  props: {
    termText: String,
  },
};
</script>