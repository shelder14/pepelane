<template>
  <div class="types__text">
    {{ teamText }}
    Team
  </div>
</template>
<script>
export default {
  name: "Team",
  props: {
    teamText: String,
  },
};
</script>