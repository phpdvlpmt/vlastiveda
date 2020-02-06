<template>
  <div>
    <div class="container mx-auto">
      <Slovakia></Slovakia>
      <Poland></Poland>
      <Germany></Germany>
      <Austria></Austria>
    </div>
  </div>
</template>

<script>
import Slovakia from "./Slovakia.vue";
import Poland from "./Poland.vue";
import Germany from "./Germany.vue";
import Austria from "./Austria.vue";

export default {
  name: "States",
  components: {
    Slovakia,
    Poland,
    Germany,
    Austria
  }
};
</script>

<style></style>
