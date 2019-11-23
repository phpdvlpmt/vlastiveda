<template>
  <div id="app" class="antialiased bg-gray-100 min-h-screen min-h-full">
    <Header></Header>
    <Cards></Cards>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "app",
  components: {
    Header,
    Cards
  }
};
</script>

<style src="./assets/css/style.css">
</style>
