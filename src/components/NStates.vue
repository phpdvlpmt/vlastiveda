<template>
  <div>
    <div class="px-3 md:px-10">
      <Austria></Austria>
      <Germany></Germany>
    </div>
  </div>
</template>

<script>
import Germany from "./Germany.vue";
import Austria from "./Austria.vue";
export default {
  name: "States",
  components: {
    Germany,
    Austria
  }
};
</script>

<style></style>
