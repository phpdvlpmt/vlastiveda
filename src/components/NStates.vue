<template>
  <div>
    <div class="px-3 md:px-10">
      <Slovakia></Slovakia>
      <Austria></Austria>
      <Germany></Germany>
    </div>
  </div>
</template>

<script>
import Germany from "./Germany.vue";
import Austria from "./Austria.vue";
import Slovakia from "./Slovakia.vue";
export default {
  name: "States",
  components: {
    Germany,
    Austria,
    Slovakia
  }
};
</script>

<style></style>
